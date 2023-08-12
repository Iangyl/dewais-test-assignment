import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/global.css';
import './index.css';
import App from './App';
import ModalProvider from 'components/ModalProvider/ModalProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
