import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import Contextprovider from './context/login.jsx'
import Profile from './pages/profile.jsx'
import Cardcontexprovider from './context/cardpagecontex.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

     <NextUIProvider>
<Cardcontexprovider>
    <Contextprovider>
    <App/>
    </Contextprovider>
    </Cardcontexprovider>
    </NextUIProvider>

  </StrictMode>,
)
