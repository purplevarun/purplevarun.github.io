import MobileMenuButtons from './MobileMenuButtons.tsx'
import MobileMenuIcon from './MobileMenuIcon.tsx'
import MobileMenuWrapper from './MobileMenu.wrapper.tsx'

const MobileMenu = () => {
    return (
        <MobileMenuWrapper>
            <MobileMenuIcon />
            <MobileMenuButtons />
        </MobileMenuWrapper>
    )
}

export default MobileMenu
