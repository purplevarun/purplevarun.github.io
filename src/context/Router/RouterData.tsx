import { useState } from 'react'
import Pages from '../../constants/Pages.ts'

const RouterData = () => {
    const [currentPage, setCurrentPage] = useState<Pages>(Pages.ABOUT_PAGE)
    return { currentPage, setCurrentPage }
}
export default RouterData
