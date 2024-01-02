import { useState } from 'react'

const MenuData = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen((prev) => !prev)
    return {
        menuOpen,
        toggleMenu,
    }
}
export default MenuData
