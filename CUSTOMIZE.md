# Customize VyroAI Theme

## 🎨 Change Colors

### Primary Color (Purple)

Edit `tailwind.config.js`:

```javascript
const vyroAI = {
    50: 'hsl(262, 83%, 95%)',
    500: 'hsl(262, 83%, 58%)',  // ← Change this!
    900: 'hsl(262, 83%, 35%)',
};
```

**Examples:**

```javascript
// Blue theme
500: 'hsl(220, 90%, 56%)',

// Green theme
500: 'hsl(142, 71%, 45%)',

// Red theme
500: 'hsl(0, 84%, 60%)',

// Orange theme
500: 'hsl(38, 92%, 50%)',
```

After changing, rebuild:
```bash
cd /var/www/pterodactyl
yarn build:production
```

---

### Accent Color

Edit `tailwind.config.js`:

```javascript
const accent = {
    500: 'hsl(220, 90%, 56%)',  // ← Change this!
};
```

---

### Background Color

Edit `tailwind.config.js`:

```javascript
colors: {
    black: 'hsl(250, 30%, 6%)',  // ← Change this!
    background: 'hsl(250, 30%, 6%)',  // ← And this!
}
```

**Lighter background:**
```javascript
black: 'hsl(250, 30%, 12%)',
background: 'hsl(250, 30%, 12%)',
```

---

## 🔤 Change Font

### Update Tailwind Config

Edit `tailwind.config.js`:

```javascript
fontFamily: {
    header: ['Your Font', 'system-ui', 'sans-serif'],
    sans: ['Your Font', 'system-ui', 'sans-serif'],
},
```

### Add Font to Package.json

```bash
cd /var/www/pterodactyl

# For Google Fonts via Fontsource
yarn add @fontsource/your-font-name

# Then import in resources/scripts/index.tsx
```

**Popular fonts:**
```bash
yarn add @fontsource/roboto
yarn add @fontsource/poppins
yarn add @fontsource/montserrat
yarn add @fontsource/open-sans
```

---

## ✨ Custom CSS

Edit `public/themes/vyroai/css/vyroai-custom.css`:

### Change Gradient

```css
:root {
    --gradient-vyroai: linear-gradient(135deg, 
        #your-color-1 0%, 
        #your-color-2 100%
    );
}
```

### Change Shadow Glow

```css
:root {
    --shadow-glow: 0 0 60px rgba(YOUR_R, YOUR_G, YOUR_B, 0.15);
}
```

### Add Custom Styles

```css
/* Your custom styles */
.my-custom-class {
    background: linear-gradient(45deg, #ff0000, #00ff00);
    padding: 20px;
}
```

---

## 🎯 Quick Color Schemes

### Cyberpunk (Pink/Cyan)

```javascript
const vyroAI = {
    500: 'hsl(320, 100%, 60%)',  // Hot pink
};

const accent = {
    500: 'hsl(180, 100%, 50%)',  // Cyan
};
```

### Ocean (Blue/Teal)

```javascript
const vyroAI = {
    500: 'hsl(200, 80%, 50%)',  // Ocean blue
};

const accent = {
    500: 'hsl(180, 70%, 45%)',  // Teal
};
```

### Forest (Green/Lime)

```javascript
const vyroAI = {
    500: 'hsl(140, 60%, 45%)',  // Forest green
};

const accent = {
    500: 'hsl(80, 70%, 50%)',  // Lime
};
```

### Sunset (Orange/Pink)

```javascript
const vyroAI = {
    500: 'hsl(15, 85%, 55%)',  // Orange
};

const accent = {
    500: 'hsl(340, 80%, 60%)',  // Pink
};
```

---

## 📝 After Making Changes

**Always rebuild:**

```bash
cd /var/www/pterodactyl

# Clear old builds
yarn clean

# Build with new changes
yarn build:production

# Clear Laravel caches
php artisan config:clear
php artisan cache:clear
php artisan view:clear

# Restart services
systemctl restart php8.1-fpm
systemctl restart nginx
```

**Clear browser cache:**
- Press `Ctrl+Shift+Delete`
- Clear cached images and files
- Or use Incognito mode for testing

---

## 🎨 Color Picker Tool

Use this to find HSL colors: https://hslpicker.com/

**Tip:** Keep the same saturation % for consistent look!

---

## 💡 Pro Tips

1. **Test first**: Copy `tailwind.config.js` before editing
2. **Small changes**: Change one color at a time
3. **Rebuild**: Always run `yarn build:production` after changes
4. **Clear cache**: Browser AND Laravel caches
5. **Backup**: Keep backups of working configurations

---

## 🔄 Reset to VyroAI Defaults

```bash
cd /tmp/VyroAI-Panel

# Get fresh theme files
git pull

# Copy original config
cp tailwind.config.js /var/www/pterodactyl/
cp theme-files/css/vyroai-custom.css /var/www/pterodactyl/public/themes/vyroai/css/

# Rebuild
cd /var/www/pterodactyl
yarn build:production
```

---

**Have fun customizing!** 🎨✨
