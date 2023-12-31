import { motion } from 'framer-motion'

const Name = () => {
    return (
        <motion.h1
            initial={{ x: -200 }}
            animate={{ x: 10 }}
            transition={{ delay: 1 }}
        >
            Varun Kedia
        </motion.h1>
    )
}
export default Name
