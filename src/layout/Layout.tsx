import { cx } from 'class-variance-authority'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'

export const Layout = () => {
  return (
    <div className={cx('layout', 'h-full w-full flex flex-row flex-nowrap')}>
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}
