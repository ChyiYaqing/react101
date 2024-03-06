import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ParentComponent from './ParentComponent.jsx'
import Form from './Form.jsx'
import Request from './Request.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    // React.StrictMode wrapper always runs a useEffect hook twice to help you in development
  <React.StrictMode>
    <Request />
    <Form />
    <App />
    <ParentComponent />
  </React.StrictMode>,
)
