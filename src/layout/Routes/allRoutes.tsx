import { ReactNode } from 'react'
import {
  CreditCard,
  DollarSign,
  Droplet,
  Home,
  Repeat,
  ShoppingCart,
  TrendingUp,
} from 'react-feather'

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
  /*Accounts*/
  {
    path: ROUTE_PATHS.ACCOUNTS,
    component: <></>,
    sidebar: {
      icon: <CreditCard size={30} />,
      title: 'Cuentas',
    },
  },
  /*Transactions*/
  {
    path: ROUTE_PATHS.TRENSFERS,
    component: <></>,
    sidebar: {
      icon: <Repeat size={30} />,
      title: 'Transferencias',
    },
  },

  /*Bills*/
  {
    path: ROUTE_PATHS.BILLS,
    component: <></>,
    sidebar: {
      icon: <Droplet size={30} />,
      title: 'Pago de servicios',
    },
  },
  /*CurrencyExchange*/
  {
    path: ROUTE_PATHS.CURRENCY_EXCHANGE,
    component: <></>,
    sidebar: {
      icon: <DollarSign size={30} />,
      title: 'Intercambio de monedas',
    },
  },
  /*Investments*/
  {
    path: ROUTE_PATHS.INVESTMENTS,
    component: <></>,
    sidebar: {
      icon: <TrendingUp size={30} />,
      title: 'Inversiones',
    },
  },
  /*Services*/
  {
    path: ROUTE_PATHS.SERVICES,
    component: <></>,
    sidebar: {
      icon: <ShoppingCart size={30} />,
      title: 'Servicios',
    },
  },
]
