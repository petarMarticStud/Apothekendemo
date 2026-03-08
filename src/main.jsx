import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Achte auf .jsx Endung
import './index.css';       // DAS MUSS HIER SEIN!

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);