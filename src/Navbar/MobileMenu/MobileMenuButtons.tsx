import { motion } from 'framer-motion'
import useRouter from '../../Router/RouterHook.tsx'
import Pages from '../../constants/Pages.ts'

const MobileMenuButtons = ({
    menuOpen,
    toggleMenu,
}: {
    menuOpen: boolean
    toggleMenu: () => void
}) => {
    const { setCurrentPage } = useRouter()
    return (
        <motion.ul
            style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
                y: menuOpen ? 55 : 0,
                opacity: menuOpen ? 1 : 0,
                scale: menuOpen ? 1.5 : 1,
                x: menuOpen ? -40 : 0,
                transition: { duration: 0.8 },
            }}
        >
            <li
                onClick={() => {
                    setCurrentPage(Pages.ABOUT_PAGE)
                    toggleMenu()
                }}
                style={{
                    borderLeft: '5px white solid',
                    borderBottom: '5px white solid',
                }}
            >
                <h3 style={{ padding: '5px' }}>About</h3>
            </li>
            <li
                onClick={() => {
                    setCurrentPage(Pages.EXPERIENCE_PAGE)
                    toggleMenu()
                }}
                style={{
                    borderLeft: '5px white solid',
                    borderBottom: '5px white solid',
                }}
            >
                <h3 style={{ padding: '5px' }}>Experience</h3>
            </li>
            <li
                onClick={() => {
                    setCurrentPage(Pages.PROJECTS_PAGE)
                    toggleMenu()
                }}
                style={{
                    borderLeft: '5px white solid',
                    borderBottom: '5px white solid',
                }}
            >
                <h3 style={{ padding: '5px' }}>Projects</h3>
            </li>
        </motion.ul>
    )
}

export default MobileMenuButtons
