import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import { StoreProvider } from 'store';

const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
);
