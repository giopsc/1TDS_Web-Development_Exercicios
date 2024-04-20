import React from 'react' // Permite usar o jsx - Biblio principal
import ReactDOM from 'react-dom/client' // Manipula a VDOM (Árvore virtual)
import App from './App.jsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)    
