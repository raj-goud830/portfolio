import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NotionDeveloper from './NotionDeveloper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotionDeveloper />
  </StrictMode>,
)
