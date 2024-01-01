import { motion } from 'framer-motion'
import { BTN_DELAY } from '../../constants/Constants.ts'
import useRouter from '../../Router/RouterHook.tsx'
import Pages from '../../constants/Pages.ts'

const NavbarRotatingBtn = ({
    btnText,
    pageName,
}: {
    btnText: string
    pageName: Pages
}) => {
    const { setCurrentPage } = useRouter()
    return (
        <motion.h1
            initial={{ rotate: 720 }}
            animate={{ rotate: 0, transition: { duration: 2 } }}
            transition={{ delay: BTN_DELAY }}
            onClick={() => setCurrentPage(pageName)}
        >
            {btnText}
        </motion.h1>
    )
}
export default NavbarRotatingBtn