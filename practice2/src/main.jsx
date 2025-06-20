import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



let Home = ()=>{
  return(
    <div>

        <h1> I am home compnent</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
