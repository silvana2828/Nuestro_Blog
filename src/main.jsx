import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
// import { BrouserRouter } from "react-router-dom";
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 3d4624fe6a25498cb0a63ece900170dc6c1c259b

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)