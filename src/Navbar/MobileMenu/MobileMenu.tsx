import { useState } from 'react'
import MobileMenuButtons from './MobileMenuButtons.tsx'
import MobileMenuIcon from './MobileMenuIcon.tsx'
import MobileMenuWrapper from './MobileMenu.wrapper.tsx'

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const props = {
        menuOpen,
        toggleMenu: () => setMenuOpen((prev) => !prev),
    }
    return (
        <MobileMenuWrapper>
            <MobileMenuIcon {...props} />
            <MobileMenuButtons {...props} />
        </MobileMenuWrapper>
    )
}

export default MobileMenu
