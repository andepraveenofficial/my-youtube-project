import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/* -----> Global Store <----- */
import { Provider } from 'react-redux'
import appStore from './Store/appStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>

  </React.StrictMode>,
)
