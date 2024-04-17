import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ExpensesProvider } from './context/expensesContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/react-bank'>
    <ExpensesProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ExpensesProvider>
  </BrowserRouter>
)
