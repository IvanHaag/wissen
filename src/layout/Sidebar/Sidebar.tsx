import { allRoutes } from '../Routes/allRoutes'
import { useContext } from 'react'
import { SidebarContext } from './SidebarProvider'
import { NavLink } from 'react-router-dom'
import { cx } from 'class-variance-authority'
import { Text } from '@/common/Text/Text'
import { LogOut } from 'react-feather'
import { ROUTE_PATHS } from '../const'

export const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen, layout } = useContext(SidebarContext)

  const filteredRoutes = allRoutes.filter(
    (route) => route.sidebar && route.path !== ROUTE_PATHS.SETTINGS
  )
  const settingsRoute = allRoutes.find(
    (route) => route.sidebar && route.path === ROUTE_PATHS.SETTINGS
  )

  return (
    //ADJUST "Z" FOR SIDEBAR
    <div
      className={cx(
        'h-full pt-20 w-72 bg-primary-50 z-0 px-3 pb-4 drop-shadow-lg bg-opacity-70 flex flex-col flex-0 overflow-hidden '
      )}
    >
      <div className="flex flex-col flex-1 ">
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
      {/* Settings item at the bottom */}
      <div className="mt-auto">
        {settingsRoute?.sidebar && (
          <SidebarNavLink
            path={`nav-link-${settingsRoute.path}`}
            title={settingsRoute.sidebar.title}
            icon={settingsRoute.sidebar.icon}
            specialIcon={settingsRoute.sidebar.specialIcon}
            setSidebarOpen={() => {
              setSidebarOpen(!sidebarOpen)
            }}
          />
        )}
      </div>
      <div className="flex flex-row pl-4 h-[50px] items-center text-red-600">
        <div className="pr-2">
          <LogOut size={30} />
        </div>
        <Text size={'lg'} color={'danger'}>
          Cerrar sesión
        </Text>
      </div>
    </div>
  )
}

const SidebarNavLink = ({
  path,
  title,
  icon,
  specialIcon,
  setSidebarOpen,
  specialClass,
}: {
  path: string
  title: string
  icon: React.ReactNode
  specialIcon?: boolean
  specialClass?: string
  setSidebarOpen: () => void
}) => {
  return (
    <NavLink
      className={({ isActive }) =>
        cx(
          'flex flex-row flex-nowrap h-[50px] items-center',
          'pl-4 w-2xs rounded-2xl bg-opacity-60 hover:bg-primary-200',
          isActive ? 'bg-primary-500' : '',
          specialClass
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
