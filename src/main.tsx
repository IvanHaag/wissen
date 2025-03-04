import ReactDOM from 'react-dom/client'
import { SidebarProvider } from './layout/Sidebar/SidebarProvider'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from '@/layout/Routes/Routes'
import './index.css'

const MainApp = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div id="app-modal" />
        <Routes />
      </BrowserRouter>
    </SidebarProvider>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<MainApp />)
