import { ReactNode } from 'react'
import { navbarStyle } from './Navbar.style.ts'
import { motion } from 'framer-motion'
import useDarkMode from '../../DarkMode/DarkModeHook.tsx'

const NavbarLayout = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()

    return (
        <motion.div
            id="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { type: 'spring' } }}
            style={navbarStyle(darkMode)}
        >
            {children}
        </motion.div>
    )
}
export default NavbarLayout
