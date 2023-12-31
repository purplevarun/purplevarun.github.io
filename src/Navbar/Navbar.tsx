import './Navbar.sass'
import Name from './Name.tsx'
import NavbarLayout from './NavbarLayout.tsx'
import NavbarRight from './NavbarRight.tsx'

const Navbar = () => {
    return (
        <NavbarLayout>
            <Name />
            <NavbarRight />
        </NavbarLayout>
    )
}
export default Navbar
