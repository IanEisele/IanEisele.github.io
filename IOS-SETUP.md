# iOS Web App Setup Guide

This Rock Paper Scissors game is now configured as an iOS-compatible Progressive Web App (PWA)!

## For Users: Installing on iOS

### iPhone/iPad Installation Steps:

1. **Open Safari** (must use Safari, not Chrome or other browsers)
2. Navigate to your game's URL
3. Tap the **Share** button (square with arrow pointing up)
4. Scroll down and tap **"Add to Home Screen"**
5. Customize the name if desired (default: "Epic RPS")
6. Tap **"Add"** in the top right corner

The app icon will appear on your home screen and can be launched like any native app!

### Features When Installed:

- **Standalone Mode**: Runs fullscreen without browser UI
- **Offline Support**: Play even without internet connection
- **Native Feel**: Respects iPhone notch and safe areas
- **No Pull-to-Refresh**: Prevents accidental page refreshes
- **Optimized Performance**: Cached for instant loading

## For Developers: Generating Icons

### Required Icon Files:

Before deploying, you need to generate the following icon files:

**App Icons:**
- `icon-152.png` (152x152) - iPad
- `icon-167.png` (167x167) - iPad Pro
- `icon-180.png` (180x180) - iPhone
- `icon-192.png` (192x192) - Android/PWA
- `icon-512.png` (512x512) - Android/PWA

**Splash Screens:**
- `splash-430x932.png` - iPhone 14 Pro Max
- `splash-393x852.png` - iPhone 14 Pro
- `splash-428x926.png` - iPhone 13/12 Pro Max
- `splash-390x844.png` - iPhone 13/12 Pro
- `splash-375x812.png` - iPhone 11 Pro/X
- `splash-414x896.png` - iPhone 11 Pro Max

### How to Generate Icons:

1. Open `generate-icons.html` in your web browser
2. Click **"Generate All Icons"**
3. Download each icon by clicking the "Download" button
4. Save all icons to your website's root directory
5. Deploy your site

### Alternative Methods:

#### Option 1: Use the SVG icon
The `icon.svg` file can be converted to PNG using any image editor or online tool:
- Open `icon.svg` in an image editor (Photoshop, GIMP, etc.)
- Export/Save As PNG at the required sizes

#### Option 2: Online Tools
Use online PWA icon generators:
- https://www.pwabuilder.com/imageGenerator
- https://realfavicongenerator.net/

Upload the `icon.svg` and let them generate all required sizes.

## Files Added for iOS/PWA Support:

- `manifest.json` - Web app manifest
- `service-worker.js` - Offline support
- `icon.svg` - Vector icon source
- `generate-icons.html` - Icon generator tool
- `IOS-SETUP.md` - This file

## Technical Details:

### Meta Tags Added:
- `apple-mobile-web-app-capable` - Enables standalone mode
- `apple-mobile-web-app-status-bar-style` - Status bar appearance
- `viewport-fit=cover` - Respects iPhone notch
- `theme-color` - App theme color

### CSS Enhancements:
- Safe area insets for notch support
- `-webkit-fill-available` for proper viewport height
- Touch action optimization
- User select disabled for native feel

### JavaScript Features:
- Pull-to-refresh prevention
- Service worker registration
- Standalone mode detection
- Dynamic viewport height adjustment
- Offline caching

## Testing:

1. Test in Safari on iOS device or simulator
2. Verify "Add to Home Screen" option appears
3. Install and test in standalone mode
4. Test offline functionality (airplane mode)
5. Verify safe area handling on notched devices

## Troubleshooting:

**Issue**: "Add to Home Screen" option doesn't appear
- **Solution**: Ensure you're using Safari browser on iOS

**Issue**: Icons not showing
- **Solution**: Make sure all icon PNG files are in the root directory

**Issue**: App not working offline
- **Solution**: Visit the app once while online to cache files

**Issue**: Status bar overlapping content
- **Solution**: Safe area insets should handle this automatically

## Browser Support:

- ✅ iOS Safari (iOS 11.3+)
- ✅ iPadOS Safari
- ✅ Chrome (Android PWA)
- ✅ Desktop browsers (regular web app)

## Next Steps:

1. Generate and upload all icon files
2. Deploy to your hosting service
3. Test on actual iOS devices
4. Share with users!

Enjoy your epic iOS web app! 🎮📱
