import { motion } from 'framer-motion'
import { BTN_DELAY } from '../constants/Constants.ts'
import RotatingBtn from './RotatingBtn.tsx'
import { ReactNode } from 'react'
import Pages from '../constants/Pages.ts'

const NavbarButtons = () => {
    return (
        <Layout>
            <RotatingBtn btnText="About" pageName={Pages.ABOUT_PAGE} />
            <RotatingBtn
                btnText="Experience"
                pageName={Pages.EXPERIENCE_PAGE}
            />
            <RotatingBtn btnText="Projects" pageName={Pages.PROJECTS_PAGE} />
        </Layout>
    )
}
const Layout = ({ children }: { children: ReactNode }) => {
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
export default NavbarButtons
