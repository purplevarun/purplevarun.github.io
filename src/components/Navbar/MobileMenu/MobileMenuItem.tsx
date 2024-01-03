import Pages from '../../../constants/Pages.ts'
import useMenu from '../../../context/Menu/MenuHook.tsx'
import useRouter from '../../../context/Router/RouterHook.tsx'

const MobileMenuItem = ({ name, page }: { name: string; page: Pages }) => {
    const { toggleMenu } = useMenu()
    const { setCurrentPage } = useRouter()
    const handleClick = () => {
        setCurrentPage(page)
        toggleMenu()
    }
    return (
        <li onClick={handleClick}>
            <h3 id="mobile_menu_item_name">{name}</h3>
        </li>
    )
}
export default MobileMenuItem
