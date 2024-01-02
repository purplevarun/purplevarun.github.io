import './Navbar.sass'
import LeftName from '../NavbarLeft/LeftName.tsx'
import NavbarWrapper from './Navbar.wrapper.tsx'
import NavbarRight from '../NavbarRight/NavbarRight.tsx'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <LeftName />
            <NavbarRight />
        </NavbarWrapper>
    )
}
export default Navbar
