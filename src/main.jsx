import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.jsx';
import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>

  <Provider store={store}>
    <App />
    <Toaster/>
  </Provider>
  
  </BrowserRouter>
  </StrictMode>,
)