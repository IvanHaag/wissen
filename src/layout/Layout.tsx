import { Sidebar } from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 min-w-0 overflow-y-auto pr-6 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  )
}
