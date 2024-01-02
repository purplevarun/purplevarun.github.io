import { motion } from 'framer-motion'
import useMenu from '../../Menu/MenuHook.tsx'
import routes from '../../data/RoutingData.ts'
import MobileMenuItem from './MobileMenuItem.tsx'

const MobileMenuButtons = () => {
    const { menuOpen } = useMenu()
    return (
        <motion.ul
            id="mobile_menu_buttons"
            initial={{ y: 0, opacity: 0 }}
            animate={{
                y: menuOpen ? 55 : 0,
                opacity: menuOpen ? 1 : 0,
                scale: menuOpen ? 1.5 : 1,
                x: menuOpen ? -40 : 0,
                transition: { duration: 0.8 },
            }}
        >
            {routes.map((route) => (
                <MobileMenuItem
                    name={route.name}
                    page={route.page}
                    key={route.name}
                />
            ))}
        </motion.ul>
    )
}

export default MobileMenuButtons
