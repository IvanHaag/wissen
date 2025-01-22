import { useState } from 'react'
import {
  Navigate,
  Route,
  Routes as ReactRouterDomRoutes,
} from 'react-router-dom'
import { Layout } from '../Layout'
import type { Route as RouteType } from './allRoutes'

const initialRoutes: RouteType[] = [
  {
    path: '*',
    component: null,
  },
]

export const Routes = () => {
  const [filterRoutes, setFilterRoutes] = useState<RouteType[]>(initialRoutes)

  return (
    <div>
      <ReactRouterDomRoutes>
        {filterRoutes.map((route) => (
          <Route element={<Layout />} key={`route-${route.path}`}>
            <Route path={route.path} element={route.component} />
          </Route>
        ))}
      </ReactRouterDomRoutes>
    </div>
  )
}
