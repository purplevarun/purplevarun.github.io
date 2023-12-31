import { motion } from 'framer-motion'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa6'
import useDarkMode from '../DarkMode/DarkModeHook.tsx'

const DarkModeButton = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()
    return (
        <div onClick={toggleDarkMode}>
            {darkMode ? (
                <motion.div>
                    <FaLightbulb size={40} />
                </motion.div>
            ) : (
                <motion.div>
                    <FaRegLightbulb size={40} />
                </motion.div>
            )}
        </div>
    )
}
export default DarkModeButton
