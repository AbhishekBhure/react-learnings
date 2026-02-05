import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import rewind from 'rewindjs-sdk';
// Initialize SDK immediately
rewind.init({
  apiKey: 'rw_bec1fc824edd39eeb2649e5db2750075'
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
