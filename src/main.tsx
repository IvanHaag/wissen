import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Routes } from './layout/Routes/Routes'
import { SidebarProvider } from './layout/SidebarProvider'

const MainApp = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div />
        <Routes />
      </BrowserRouter>
    </SidebarProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<MainApp />)
