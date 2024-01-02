import { motion } from 'framer-motion'
import { NAME_DELAY } from '../../constants/Constants.ts'

const LeftNameWrapper = ({ children }: { children: string }) => {
    return (
        <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 10 }}
            transition={{ delay: NAME_DELAY }}
        >
            {children}
        </motion.h1>
    )
}
export default LeftNameWrapper
