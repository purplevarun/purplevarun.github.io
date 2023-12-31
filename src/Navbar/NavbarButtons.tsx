import { motion } from 'framer-motion'
import { BTN_DELAY } from '../constants/Constants.ts'
import RotatingBtn from './RotatingBtn.tsx'

const NavbarButtons = () => {
    return (
        <motion.div
            id="navbar_buttons"
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 2 } }}
            transition={{ delay: BTN_DELAY }}
        >
            <RotatingBtn btnText="About" />
            <RotatingBtn btnText="Experience" />
            <RotatingBtn btnText="Projects" />
        </motion.div>
    )
}
export default NavbarButtons
