import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Hi } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
