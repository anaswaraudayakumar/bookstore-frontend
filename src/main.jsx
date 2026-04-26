import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='3020606602-9ko3fecg8lk5dl3cfmtq2r3pv96vk4af.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
