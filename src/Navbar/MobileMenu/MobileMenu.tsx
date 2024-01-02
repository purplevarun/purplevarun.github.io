import MobileMenuButtons from './MobileMenuButtons.tsx'
import MobileMenuIcon from './MobileMenuIcon.tsx'
import MobileMenuWrapper from './MobileMenu.wrapper.tsx'
import MenuProvider from '../../Menu/MenuProvider.tsx'

const MobileMenu = () => {
    return (
        <MenuProvider>
            <MobileMenuWrapper>
                <MobileMenuIcon />
                <MobileMenuButtons />
            </MobileMenuWrapper>
        </MenuProvider>
    )
}

export default MobileMenu
