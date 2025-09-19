import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="shrink-0">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0 overflow-y-auto pr-6 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
