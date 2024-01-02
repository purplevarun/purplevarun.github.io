import { FaList } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { ICON_SIZE } from '../../../constants/Constants.ts'
import useMenu from '../../Menu/MenuHook.tsx'

const MobileMenuIcon = () => {
    const { menuOpen, toggleMenu } = useMenu()
    return (
        <motion.div
            initial={{ scaleX: 1, scaleY: 1 }}
            animate={{
                scaleX: menuOpen ? 1.5 : 1,
                scaleY: menuOpen ? 1.5 : 1,
                paddingLeft: menuOpen ? 15 : 0,
                paddingRight: menuOpen ? 15 : 0,
            }}
            onClick={toggleMenu}
        >
            <FaList size={ICON_SIZE} />
        </motion.div>
    )
}
export default MobileMenuIcon
