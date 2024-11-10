import React from 'react';
import ReactDOM from 'react-dom/client';
import "./shared/styles/index.css"
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
     <App/>
    </BrowserRouter>
  </React.StrictMode>
);

