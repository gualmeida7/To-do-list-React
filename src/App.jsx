import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todolist from './Todolist'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todolist />
  </StrictMode>,
)
