import Logo from '@/assets/images/ExtendedLogo.webp'
import { cx } from 'class-variance-authority'

export const Header = () => {
  return (
    <div className="bg-red-600">
      <div className="">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
