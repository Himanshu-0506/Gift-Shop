import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataContextProvider } from './DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataContextProvider>
    <App />
  </DataContextProvider>
);

reportWebVitals();
