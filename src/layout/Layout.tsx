import { cx } from 'class-variance-authority'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import Background from '@/assets/images/background.webp'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
