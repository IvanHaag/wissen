import Logo from '@/assets/images/smallExtendedLogo.webp'

export const Header = () => {
  return (
    <div className="relative z-10 w-full bg-primary-50 drop-shadow-lg">
      <div className="">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
