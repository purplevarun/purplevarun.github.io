import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { BTN_DELAY } from '../../../constants/Constants.ts'

const NavbarButtonsWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            id="navbar_buttons"
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 2 } }}
            transition={{ delay: BTN_DELAY }}
        >
            {children}
        </motion.div>
    )
}
export default NavbarButtonsWrapper
