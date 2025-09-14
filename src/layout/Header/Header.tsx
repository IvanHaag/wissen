import Logo from '@/assets/images/smallExtendedLogo2.webp'

export const Header = () => {
  return (
    <div className="flex w-full pl-4 flex-shrink-0 bg-primary-50 drop-shadow-lg">
      <div className="flex items-center h-16">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
