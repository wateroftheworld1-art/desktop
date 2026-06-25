# Ananda Resort Management — Desktop App

Wraps **https://script.google.com/macros/s/AKfycbypNJwswL7d1s8_m0wqF8Wmb31cNfCcZRw_g7H2yuB_aMHz43qq12RlVMPwzsOV5Piv/exec** as a native desktop window using Electron.

## Run locally
```
npm install
npm start
```

## Build the real installers (.exe / .dmg / .AppImage)
Easiest path — let GitHub build it for you:
1. Push this folder to a new GitHub repo.
2. Open the **Actions** tab. The included workflow builds Windows, Mac, and Linux installers automatically.
3. Download the finished installer from the workflow run's **Artifacts**.

Or build locally if you have Node.js installed:
```
npm install
npm run build:win     # Windows
npm run build:mac     # macOS
npm run build:linux   # Linux
```
