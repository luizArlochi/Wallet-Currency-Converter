const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// Importe seu componente App aqui
import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/main';

let mainWindow;

function createWindow() {
  // Cria a janela do navegador.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true // Permite o uso do Node.js na página renderizada
    }
  });

  // Carrega o arquivo index.html da sua aplicação
  // Se estiver em ambiente de desenvolvimento, carrega a URL do servidor de desenvolvimento do React
  // Caso contrário, carrega o arquivo build/index.html
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  // Abre o DevTools se estiver em ambiente de desenvolvimento
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // Encerra a aplicação quando a janela do Electron for fechada
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Este método será chamado quando Electron terminar a inicialização e estiver pronto para criar janelas do navegador.
// Algumas APIs só podem ser usadas após este evento ocorrer.
app.on('ready', () => {
  // Cria a janela do navegador com React App
  createWindow();

  // Renderiza o componente App dentro da janela do Electron
  ReactDOM.render(<Main />, mainWindow.webContents);
});

// Encerra quando todas as janelas estão fechadas, exceto no macOS. No macOS, é comum para aplicativos e suas barras de menu
// permanecerem ativos até que o usuário saia explicitamente com Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // No macOS, é comum recriar uma janela no aplicativo quando o ícone do dock é clicado e não há outras janelas abertas.
  if (mainWindow === null) {
    createWindow();
  }
});
