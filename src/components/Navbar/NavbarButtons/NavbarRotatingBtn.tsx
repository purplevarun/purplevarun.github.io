import { motion } from 'framer-motion'
import { BTN_DELAY } from '../../../constants/Constants.ts'
import useRouter from '../../../context/Router/RouterHook.tsx'
import Pages from '../../../constants/Pages.ts'

const NavbarRotatingBtn = ({ name, page }: { name: string; page: Pages }) => {
    const { setCurrentPage } = useRouter()
    return (
        <motion.h1
            initial={{ rotate: 720 }}
            animate={{ rotate: 0, transition: { duration: 2 } }}
            transition={{ delay: BTN_DELAY }}
            onClick={() => setCurrentPage(page)}
        >
            {name}
        </motion.h1>
    )
}
export default NavbarRotatingBtn
