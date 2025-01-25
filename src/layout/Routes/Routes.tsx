import { useState } from 'react'
import {
  Navigate,
  Route,
  Routes as ReactRouterDomRoutes,
} from 'react-router-dom'
import { Layout } from '../Layout'
import type { Route as RouteType } from './allRoutes'
import { allRoutes } from './allRoutes'
import { cx } from 'class-variance-authority'

const initialRoutes: RouteType[] = [
  {
    path: '*',
    component: null,
  },
]

export const Routes = () => {
  const [filteredRoutes, setFilterRoutes] = useState<RouteType[]>(allRoutes)
  return (
    <div className={cx('w-full h-full')}>
      <ReactRouterDomRoutes>
        {filteredRoutes.map((route) => (
          <Route element={<Layout />} key={`route-${route.path}`}>
            <Route path={route.path} element={route.component} />
          </Route>
        ))}
      </ReactRouterDomRoutes>
    </div>
  )
}
