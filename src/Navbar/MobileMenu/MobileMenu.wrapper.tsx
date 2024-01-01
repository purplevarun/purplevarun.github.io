import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const MobileMenuWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: 1 }}
            id="navbar_mobile"
        >
            {children}
        </motion.div>
    )
}
export default MobileMenuWrapper
