import React from 'react'
import ReactDOM from 'react-dom/client'

// window.React = React
// window.ReactDOM = ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root')!)

const vdiv = React.createElement('div', {
  id:'123', 
  className:'placki', 
  style:{ color:'red' }
},
 React.createElement('p',null, 'Alice has a cat'),
 React.createElement('input',{ key:'rememberMe' }),
)

root.render(vdiv)

// import App from './App.tsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )