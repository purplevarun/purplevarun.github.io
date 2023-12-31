import { FaList } from 'react-icons/fa6'
import { motion } from 'framer-motion'

const NavbarMobileMenu = () => {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
        >
            <motion.div>
                <FaList size={40} />
            </motion.div>
        </motion.div>
    )
}
export default NavbarMobileMenu
