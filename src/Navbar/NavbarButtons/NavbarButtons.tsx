import NavbarButtonsWrapper from './NavbarButtons.wrapper.tsx'
import NavbarRotatingBtn from './NavbarRotatingBtn.tsx'
import routes from '../../data/RoutingData.ts'

const NavbarButtons = () => {
    return (
        <NavbarButtonsWrapper>
            {routes.map((route) => (
                <NavbarRotatingBtn
                    name={route.name}
                    page={route.page}
                    key={route.name}
                />
            ))}
        </NavbarButtonsWrapper>
    )
}

export default NavbarButtons
