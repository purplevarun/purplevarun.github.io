import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa6'
import useDarkMode from '../../DarkMode/DarkModeHook.tsx'
import { ICON_SIZE } from '../../../constants/Constants.ts'

const DarkModeButton = () => {
    const { darkMode, toggleDarkMode } = useDarkMode()
    return (
        <div onClick={toggleDarkMode}>
            {darkMode ? (
                <FaLightbulb size={ICON_SIZE} />
            ) : (
                <FaRegLightbulb size={ICON_SIZE} />
            )}
        </div>
    )
}
export default DarkModeButton
