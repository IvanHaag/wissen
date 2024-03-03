import {cx} from 'class-variance-authority';
import {Sidebar} from 'react-feather';
import {Outlet, useLocation} from 'react-router-dom';
import {ROUTE_PATHS} from './types/const';

export const Layout = () => {
  const location = useLocation();

  const routePadding = location.pathname === ROUTE_PATHS.ROOT;

  return (
    <div className={cx('layout', 'h-full w-full flex flex-row flex-nowrap')}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
