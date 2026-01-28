# VyroAI Theme Installation Guide

## 📋 What You Need

- ✅ Existing Pterodactyl Panel (already installed and working)
- ✅ SSH access to your server
- ✅ Root or sudo privileges

---

## 🚀 Installation Methods

### Method 1: Direct from GitHub (Recommended)

**On your server:**

```bash
# 1. Download the theme
cd /tmp
git clone https://github.com/Muisje123/VyroAI-Panel.git
cd VyroAI-Panel

# 2. Run installer
chmod +x install-vyroai-theme.sh
sudo ./install-vyroai-theme.sh
```

**Done!** Visit your panel to see VyroAI design! 🎉

---

### Method 2: Manual Installation

If you prefer to apply changes manually:

#### Step 1: Backup Your Panel

```bash
cd /var/www/pterodactyl
cp tailwind.config.js tailwind.config.js.backup
cp .env .env.backup
```

#### Step 2: Download Theme Files

```bash
cd /tmp
git clone https://github.com/Muisje123/VyroAI-Panel.git
cd VyroAI-Panel
```

#### Step 3: Copy Files

```bash
# Copy Tailwind config
cp tailwind.config.js /var/www/pterodactyl/

# Create theme directory
mkdir -p /var/www/pterodactyl/public/themes/vyroai/css

# Copy custom CSS
cp theme-files/css/vyroai-custom.css /var/www/pterodactyl/public/themes/vyroai/css/

# If vyroai theme doesn't exist, copy from pterodactyl
if [ ! -d /var/www/pterodactyl/public/themes/vyroai ]; then
    cp -r /var/www/pterodactyl/public/themes/pterodactyl /var/www/pterodactyl/public/themes/vyroai
fi
```

#### Step 4: Update Configuration

```bash
cd /var/www/pterodactyl

# Edit .env
nano .env
# Change these lines:
#   APP_NAME="VyroAI Panel"
#   APP_THEME=vyroai
```

#### Step 5: Install Dependencies & Build

```bash
# Add Inter font
yarn add @fontsource/inter

# Build assets
yarn build:production
```

#### Step 6: Clear Caches

```bash
php artisan config:clear
php artisan cache:clear
php artisan view:clear
```

#### Step 7: Restart Services

```bash
systemctl restart php8.1-fpm
systemctl restart nginx  # or apache2
```

**Done!** 🎉

---

## 🎨 What Gets Changed

### Files Modified:
- `tailwind.config.js` - VyroAI color scheme
- `.env` - App name and theme setting
- `public/themes/vyroai/` - New theme directory with custom CSS

### Colors Applied:
- **Primary**: Purple/Violet `hsl(262, 83%, 58%)`
- **Accent**: Blue `hsl(220, 90%, 56%)`
- **Background**: Dark `hsl(250, 30%, 6%)`

### Features:
- ✨ Glassmorphism effects
- ✨ Smooth animations
- ✨ Custom gradients
- ✨ Inter font

---

## ✅ Verification

After installation, check:

1. **Visit your panel URL**
2. **Look for:**
   - Purple/violet color scheme
   - "VyroAI Panel" in title
   - Modern glassmorphism effects
3. **If not visible:**
   - Clear browser cache (Ctrl+Shift+Delete)
   - Run `yarn build:production` again
   - Check logs: `tail -f storage/logs/laravel.log`

---

## 🔄 Updates

To update the theme:

```bash
cd /tmp/VyroAI-Panel
git pull
sudo ./install-vyroai-theme.sh
```

---

## 🔙 Rollback

To revert to original Pterodactyl theme:

```bash
cd /var/www/pterodactyl

# Restore backups
cp /root/vyroai-backups/tailwind.config.js.XXXXXX tailwind.config.js
cp /root/vyroai-backups/.env.XXXXXX .env

# Rebuild
yarn build:production

# Clear caches
php artisan config:clear
php artisan cache:clear

# Restart services
systemctl restart php8.1-fpm
systemctl restart nginx
```

---

## 🐛 Troubleshooting

### Theme not showing?

```bash
cd /var/www/pterodactyl

# Verify theme setting
grep APP_THEME .env
# Should show: APP_THEME=vyroai

# Rebuild assets
yarn build:production

# Clear everything
php artisan config:clear
php artisan cache:clear
php artisan view:clear

# Clear browser cache
# Ctrl+Shift+Delete → Clear cache
```

### Colors wrong?

```bash
# Check if Tailwind config was updated
cat tailwind.config.js | grep vyroai

# Rebuild
yarn build:production
```

### Build errors?

```bash
# Reinstall dependencies
rm -rf node_modules
yarn install
yarn build:production
```

---

## 📞 Support

- **Installation logs**: `/tmp/vyroai-install.log`
- **Panel logs**: `/var/www/pterodactyl/storage/logs/laravel.log`
- **Backups**: `/root/vyroai-backups/`

---

## 🎯 Quick Command Reference

```bash
# Install theme
sudo /tmp/VyroAI-Panel/install-vyroai-theme.sh

# Rebuild assets
cd /var/www/pterodactyl && yarn build:production

# Clear caches
php artisan config:clear && php artisan cache:clear

# Restart services
systemctl restart php8.1-fpm nginx

# Check logs
tail -f /var/www/pterodactyl/storage/logs/laravel.log
```

---

**Enjoy your VyroAI Panel!** 🚀
