import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TestProvider } from './Context/TestContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <TestProvider>
      <App />
    </TestProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
