import { motion } from 'framer-motion'
import { NAME_DELAY } from '../../../constants/Constants.ts'
import { ReactNode } from 'react'

const LeftNameWrapper = ({ children }: { children: ReactNode }) => {
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
