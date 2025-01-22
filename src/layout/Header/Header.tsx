import Logo from '@/assets/images/ExtendedLogo.webp'

export const Header = () => {
  return (
    <div>
      <div className="bg-gray-700 border-2 border-black">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  )
}
