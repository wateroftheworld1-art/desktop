const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#3aa6ff',
    title: "Ananda Resort Management",
    webPreferences: { contextIsolation: true }
  });
  win.loadURL("https://script.google.com/macros/s/AKfycbypNJwswL7d1s8_m0wqF8Wmb31cNfCcZRw_g7H2yuB_aMHz43qq12RlVMPwzsOV5Piv/exec");
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
