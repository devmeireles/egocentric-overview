import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Routes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/egocentric-overview'>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
