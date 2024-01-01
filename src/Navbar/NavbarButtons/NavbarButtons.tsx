import NavbarButtonsWrapper from './NavbarButtons.wrapper.tsx'
import NavbarRotatingBtn from './NavbarRotatingBtn.tsx'
import Pages from '../../constants/Pages.ts'

const NavbarButtons = () => {
    return (
        <NavbarButtonsWrapper>
            <NavbarRotatingBtn btnText="About" pageName={Pages.ABOUT_PAGE} />
            <NavbarRotatingBtn
                btnText="Experience"
                pageName={Pages.EXPERIENCE_PAGE}
            />
            <NavbarRotatingBtn
                btnText="Projects"
                pageName={Pages.PROJECTS_PAGE}
            />
        </NavbarButtonsWrapper>
    )
}

export default NavbarButtons
