import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


const info = {
  name:'baba',
  age:20
}

const infoContext = createContext(info);

ReactDOM.createRoot(document.getElementById('root')).render(
  <infoContext.Provider value={info}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </infoContext.Provider>
)

export default infoContext;
