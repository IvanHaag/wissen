import { allRoutes } from '../Routes/allRoutes'
import { useContext } from 'react'
import { SidebarContext } from './SidebarProvider'
import { NavLink } from 'react-router-dom'
import { cx } from 'class-variance-authority'
import { Text } from '@/common/Text/Text'

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, layout } = useContext(SidebarContext)

  const filteredRoutes = allRoutes.filter((route) => route.sidebar)

  return (
    //ADJUST "Z" FOR SIDEBAR
    <div
      className={cx(
        'h-full w-72 bg-primary-50 z-0 px-3 pb-4 pt-7 drop-shadow-lg bg-opacity-70'
      )}
    >
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
  console.log('NavLink Path:', path)
  console.log('Current Route:', window.location.pathname)
  return (
    <NavLink
      className={({ isActive }) =>
        cx(
          'flex flex-row flex-nowrap h-[50px] items-center',
          'pl-4 w-2xs rounded-2xl bg-opacity-60 hover:bg-primary-200',
          isActive ? 'bg-primary-500' : ''
        )
      }
      to={path}
      key={`nav-link-${path}`}
      onClick={setSidebarOpen}
      end
    >
      <div className="flex flex-row">
        <div className="pr-2">{icon}</div>
        <Text size={'lg'}>{title}</Text>
      </div>
    </NavLink>
  )
}
