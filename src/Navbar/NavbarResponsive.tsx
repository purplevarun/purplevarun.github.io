import useIsMobile from 'ismobilehook'
import NavbarButtons from './NavbarButtons.tsx'
import NavbarMobileMenu from './NavbarMobileMenu.tsx'

const NavbarResponsive = () => {
    const isMobile = useIsMobile()
    return isMobile ? <NavbarMobileMenu /> : <NavbarButtons />
}
export default NavbarResponsive
