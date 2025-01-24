import { cx } from 'class-variance-authority'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import Background from '@/assets/images/background.webp'

export const Layout = () => {
  return (
    <div
      className={cx(
        'flex flex-col h-full w-full'
        // `bg-[url('${Background}') bg-cover bg-center bg-no-repeat]`
      )}
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Header />
      <div className="flex flex-1">
        <Sidebar />
      </div>
    </div>
  )
}
