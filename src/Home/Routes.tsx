import useRouter from '../Router/RouterHook.tsx'
import Pages from '../constants/Pages.ts'
import { ReactNode } from 'react'
import About from '../Pages/About.tsx'
import Experience from '../Pages/Experience.tsx'
import Projects from '../Pages/Projects.tsx'

const Routes = () => {
    const { currentPage } = useRouter()
    const router: { [key in Pages]: ReactNode } = {
        [Pages.ABOUT_PAGE]: <About />,
        [Pages.EXPERIENCE_PAGE]: <Experience />,
        [Pages.PROJECTS_PAGE]: <Projects />,
    }
    return router[currentPage]
}
export default Routes
