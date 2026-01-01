/**
 * @file main.jsx
 * @description Entry point for the React application.
 * @author Saifullah & Habib
 * @copyright 2026 Modern Language Association (MLA)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Initialize the root element and render the App component inside StrictMode
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
