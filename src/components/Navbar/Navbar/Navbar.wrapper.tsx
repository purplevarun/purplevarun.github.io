import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import useDarkMode from '../../../context/DarkMode/DarkModeHook.tsx'
import { BLACK_COLOR, WHITE_COLOR } from '../../../constants/Colors.ts'

const NavbarLayout = ({ children }: { children: ReactNode }) => {
    const { darkMode } = useDarkMode()

    return (
        <motion.div
            id="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { type: 'spring' } }}
            style={{
                borderBottomColor: darkMode ? WHITE_COLOR : BLACK_COLOR,
            }}
        >
            {children}
        </motion.div>
    )
}
export default NavbarLayout
