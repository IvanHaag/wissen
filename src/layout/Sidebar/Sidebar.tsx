import { allRoutes } from '../Routes/allRoutes'
import { useContext } from 'react'
import { SidebarContext } from './SidebarProvider'
import { NavLink } from 'react-router-dom'
import { cx } from 'class-variance-authority'

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, layout } = useContext(SidebarContext)

  const filteredRoutes = allRoutes.filter((route) => route.sidebar)

  return (
    //ADJUST "Z" FOR SIDEBAR
    <div className={cx('fixed h-full')}>
      {filteredRoutes.map((route) => {
        if (!route.sidebar) return null
        return (
          <SidebarNavLink
            key={`nav-link-${route.path}`}
            path={route.path}
            title={route.sidebar.title}
            icon={route.sidebar.icon}
            specialIcon={route.sidebar.specialIcon}
            setSidebarOpen={() => {
              setSidebarOpen(!sidebarOpen)
            }}
          />
        )
      })}
    </div>
  )
}

const SidebarNavLink = ({
  path,
  title,
  icon,
  specialIcon,
  setSidebarOpen,
}: {
  path: string
  title: string
  icon: React.ReactNode
  specialIcon?: boolean
  setSidebarOpen: () => void
}) => {
  return (
    <NavLink
      className="flex flex-row items-center"
      to={path}
      key={`nav-link-${path}`}
      onClick={setSidebarOpen}
    >
      <div />
      <div>{icon}</div>
      {title}
    </NavLink>
  )
}
