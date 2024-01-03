import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { BLACK, WHITE } from '../../../constants/Constants.ts'
import useDarkMode from '../../../context/DarkMode/DarkModeHook.tsx'

const NavbarLayout = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()

    return (
        <motion.div
            id="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { type: 'spring' } }}
            style={{
                borderBottomColor: darkMode ? WHITE : BLACK,
            }}
        >
            {children}
        </motion.div>
    )
}
export default NavbarLayout
