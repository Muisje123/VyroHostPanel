#!/bin/bash
# VyroAI Theme Installer for Pterodactyl Panel
# This script applies VyroAI branding to your existing Pterodactyl installation

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

# Configuration
PANEL_DIR="${PANEL_DIR:-/var/www/pterodactyl}"
PHP_VERSION="${PHP_VERSION:-8.1}"
BACKUP_DIR="/root/vyroai-backups"
LOG_FILE="/tmp/vyroai-install.log"

# Banner
echo -e "${PURPLE}"
echo "╔══════════════════════════════════════════╗"
echo "║                                          ║"
echo "║       VyroAI Theme Installer             ║"
echo "║       for Pterodactyl Panel              ║"
echo "║                                          ║"
echo "╚══════════════════════════════════════════╝"
echo -e "${NC}"

# Functions
log() {
    echo -e "${BLUE}[INFO]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1" | tee -a "$LOG_FILE"
}

warn() {
    echo -e "${YELLOW}[WARNING]${NC} $1" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" | tee -a "$LOG_FILE"
    exit 1
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   error "This script must be run as root"
fi

# Check if panel directory exists
if [ ! -d "$PANEL_DIR" ]; then
    error "Pterodactyl panel not found at $PANEL_DIR"
fi

log "Starting VyroAI Theme installation..."
echo ""

# Create backup
log "Creating backup..."
mkdir -p "$BACKUP_DIR"
BACKUP_DATE=$(date +%Y%m%d_%H%M%S)

if [ -f "$PANEL_DIR/tailwind.config.js" ]; then
    cp "$PANEL_DIR/tailwind.config.js" "$BACKUP_DIR/tailwind.config.js.$BACKUP_DATE"
fi

if [ -f "$PANEL_DIR/.env" ]; then
    cp "$PANEL_DIR/.env" "$BACKUP_DIR/.env.$BACKUP_DATE"
fi

success "Backup created at $BACKUP_DIR"
echo ""

# Enable maintenance mode
log "Enabling maintenance mode..."
cd "$PANEL_DIR"
php artisan down 2>/dev/null || warn "Could not enable maintenance mode"
echo ""

# Update Tailwind config
log "Applying VyroAI color scheme..."
if [ -f "tailwind.config.js" ]; then
    cp tailwind.config.js "$PANEL_DIR/tailwind.config.js"
    success "Tailwind configuration updated"
else
    warn "tailwind.config.js not found in theme package"
fi
echo ""

# Create theme directory
log "Setting up VyroAI theme files..."
mkdir -p "$PANEL_DIR/public/themes/vyroai/css"

# Copy custom CSS if exists
if [ -f "theme-files/css/vyroai-custom.css" ]; then
    cp theme-files/css/vyroai-custom.css "$PANEL_DIR/public/themes/vyroai/css/"
    success "Custom CSS installed"
fi

# If pterodactyl theme exists, copy it to vyroai
if [ -d "$PANEL_DIR/public/themes/pterodactyl" ] && [ ! -d "$PANEL_DIR/public/themes/vyroai" ]; then
    log "Copying pterodactyl theme to vyroai..."
    cp -r "$PANEL_DIR/public/themes/pterodactyl" "$PANEL_DIR/public/themes/vyroai"
    success "Theme directory created"
fi

echo ""

# Update .env
log "Updating configuration..."
if [ -f "$PANEL_DIR/.env" ]; then
    # Update theme
    if grep -q "APP_THEME=" "$PANEL_DIR/.env"; then
        sed -i 's/APP_THEME=.*/APP_THEME=vyroai/' "$PANEL_DIR/.env"
    else
        echo "APP_THEME=vyroai" >> "$PANEL_DIR/.env"
    fi
    
    # Update app name
    if grep -q "APP_NAME=" "$PANEL_DIR/.env"; then
        sed -i 's/APP_NAME=.*/APP_NAME="VyroAI Panel"/' "$PANEL_DIR/.env"
    else
        echo 'APP_NAME="VyroAI Panel"' >> "$PANEL_DIR/.env"
    fi
    
    success "Environment configuration updated"
fi
echo ""

# Update config/app.php
log "Updating app configuration..."
if [ -f "$PANEL_DIR/config/app.php" ]; then
    sed -i "s/'name' => env('APP_NAME', '.*')/'name' => env('APP_NAME', 'VyroAI Panel')/" "$PANEL_DIR/config/app.php"
    success "App configuration updated"
fi
echo ""

# Add Inter font to package.json if not present
log "Checking font dependencies..."
if [ -f "$PANEL_DIR/package.json" ]; then
    if ! grep -q "@fontsource/inter" "$PANEL_DIR/package.json"; then
        log "Adding Inter font dependency..."
        # This is a simple addition - user may need to run yarn install manually
        warn "Please run 'yarn add @fontsource/inter' to install Inter font"
    fi
fi
echo ""

# Install dependencies (optional)
read -p "Do you want to install/update dependencies now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log "Installing Node dependencies..."
    yarn install 2>&1 | tee -a "$LOG_FILE"
    
    log "Building VyroAI theme..."
    yarn build:production 2>&1 | tee -a "$LOG_FILE"
    success "Assets built successfully"
else
    warn "Skipped dependency installation"
    warn "Run these commands manually:"
    echo "  cd $PANEL_DIR"
    echo "  yarn install"
    echo "  yarn build:production"
fi
echo ""

# Clear caches
log "Clearing caches..."
php artisan config:clear 2>&1 | tee -a "$LOG_FILE"
php artisan cache:clear 2>&1 | tee -a "$LOG_FILE"
php artisan view:clear 2>&1 | tee -a "$LOG_FILE"
success "Caches cleared"
echo ""

# Fix permissions
log "Setting permissions..."
chown -R www-data:www-data "$PANEL_DIR"
chmod -R 755 "$PANEL_DIR/storage" "$PANEL_DIR/bootstrap/cache"
success "Permissions set"
echo ""

# Restart services
log "Restarting services..."
systemctl restart php${PHP_VERSION}-fpm 2>&1 | tee -a "$LOG_FILE" || warn "Could not restart PHP-FPM"
systemctl restart nginx 2>/dev/null || systemctl restart apache2 2>/dev/null || warn "Could not restart web server"
success "Services restarted"
echo ""

# Disable maintenance mode
log "Disabling maintenance mode..."
php artisan up 2>/dev/null || warn "Could not disable maintenance mode"
echo ""

# Success message
echo -e "${PURPLE}═══════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ VyroAI Theme installed successfully!${NC}"
echo -e "${PURPLE}═══════════════════════════════════════════${NC}"
echo ""
echo -e "${BLUE}Installation Summary:${NC}"
echo "  • Theme: VyroAI (Purple/Violet)"
echo "  • Panel Name: VyroAI Panel"
echo "  • Backup Location: $BACKUP_DIR"
echo "  • Log File: $LOG_FILE"
echo ""
echo -e "${YELLOW}Next Steps:${NC}"
echo "  1. Visit your panel to see the new design"
echo "  2. Clear your browser cache (Ctrl+Shift+Delete)"
echo "  3. If theme doesn't appear, run:"
echo "     cd $PANEL_DIR"
echo "     yarn build:production"
echo ""
echo -e "${GREEN}Enjoy your VyroAI Panel!${NC} 🎨✨"
echo ""
