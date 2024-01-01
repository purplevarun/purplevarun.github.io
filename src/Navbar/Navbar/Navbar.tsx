import './Navbar.sass'
import Name from '../NavbarLeft/Name.tsx'
import NavbarWrapper from './Navbar.wrapper.tsx'
import NavbarRight from '../NavbarRight/NavbarRight.tsx'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <Name />
            <NavbarRight />
        </NavbarWrapper>
    )
}
export default Navbar
