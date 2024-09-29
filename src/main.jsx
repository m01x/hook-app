import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FocusScreen } from './04-useRef/FocusScreen'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { HooksApp } from './HooksApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { CounterApp } from './01-useState/CounterApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <FocusScreen />
  // </StrictMode>
)

