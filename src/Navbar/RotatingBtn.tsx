import { motion } from 'framer-motion'
import { BTN_DELAY } from '../constants/Constants.ts'

const RotatingBtn = ({ btnText }: { btnText: string }) => {
    return (
        <motion.h1
            initial={{ rotate: 720 }}
            animate={{ rotate: 0, transition: { duration: 2 } }}
            transition={{ delay: BTN_DELAY }}
        >
            {btnText}
        </motion.h1>
    )
}
export default RotatingBtn
