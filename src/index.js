import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Import the main App component

// Render the main App component to the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
