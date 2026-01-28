# VyroAI Theme Package

Transform your existing Pterodactyl Panel into VyroAI Panel with modern purple/violet design!

## 🎨 What This Package Contains

This is a **lightweight theme package** that adds VyroAI branding to your existing Pterodactyl installation.

**Included:**
- ✅ VyroAI color scheme (purple/violet)
- ✅ Custom CSS with glassmorphism effects
- ✅ Updated Tailwind configuration
- ✅ Inter font integration
- ✅ Deployment script
- ✅ Complete documentation

**NOT Included:**
- ❌ Full Pterodactyl panel code (you already have this!)
- ❌ Large dependencies (node_modules, vendor)
- ❌ Database files

---

## 📋 Requirements

- Existing Pterodactyl Panel installation
- SSH access to your server
- Basic command line knowledge

---

## 🚀 Quick Install

### On Your Server:

```bash
# 1. Download this repository
cd /tmp
git clone https://github.com/Muisje123/VyroAI-Panel.git
cd VyroAI-Panel

# 2. Run the installer
chmod +x install-vyroai-theme.sh
sudo ./install-vyroai-theme.sh
```

That's it! Your panel will have VyroAI branding! 🎉

---

## 📁 What Gets Modified

- `tailwind.config.js` - VyroAI colors
- `public/themes/vyroai/` - Custom CSS
- `config/app.php` - App name
- `.env` - Theme setting
- Assets rebuilt with new design

---

## 🎨 Design Features

- **Primary Color**: Purple/Violet `#8B5CF6`
- **Accent Color**: Blue `#3B82F6`
- **Font**: Inter
- **Effects**: Glassmorphism, gradients, smooth animations

---

## 📚 Documentation

- `INSTALL.md` - Detailed installation guide
- `CUSTOMIZE.md` - How to customize colors
- `ROLLBACK.md` - How to revert changes

---

## 🔄 Updates

To update the theme:

```bash
cd /tmp/VyroAI-Panel
git pull
sudo ./install-vyroai-theme.sh
```

---

## 🆘 Support

Having issues? Check:
- Installation logs in `/tmp/vyroai-install.log`
- Panel logs in `/var/www/pterodactyl/storage/logs/`

---

**VyroAI Theme** - Modern design for Pterodactyl Panel 🎨✨
