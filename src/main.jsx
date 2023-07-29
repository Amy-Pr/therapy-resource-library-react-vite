import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import dataResources from './data/test-data.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={dataResources}/>
  </React.StrictMode>,
)
