import useIsMobile from 'ismobilehook'
import NavbarButtons from '../NavbarButtons/NavbarButtons.tsx'
import MobileMenu from '../MobileMenu/MobileMenu.tsx'

const NavbarResponsive = () => {
    const isMobile = useIsMobile()
    return isMobile ? <MobileMenu /> : <NavbarButtons />
}
export default NavbarResponsive
