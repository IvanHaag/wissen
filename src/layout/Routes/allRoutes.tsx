import { ReactNode } from 'react'
import { Grid, Home } from 'react-feather'

import { Dashboard } from '../../screens/root/Dashboard'
import { Landing } from '../../screens/root/Landing'
import { ROUTE_PATHS } from '../const'

export interface Route {
  path: string
  component: ReactNode
  sidebar?: {
    icon: ReactNode
    specialIcon?: boolean
    title: string
  }
}

export const allRoutes: Route[] = [
  /*Landing*/
  // {
  //   path: ROUTE_PATHS.ROOT,
  //   component: <Landing />,
  //   sidebar: {
  //     icon: <Home size={30} />,
  //     title: 'Inicio',
  //   },
  // },
  /*Dashboard*/
  {
    path: ROUTE_PATHS.ROOT,
    component: <Dashboard />,
    sidebar: {
      icon: <Home size={30} />,
      title: 'Inicio',
    },
  },
]
