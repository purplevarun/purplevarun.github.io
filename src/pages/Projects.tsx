import data from '../data/Data.ts'
import './Page.sass'
const Projects = () => {
    return (
        <div id="page">
            <h1 id="page_header">{data.projects.heading}</h1>
        </div>
    )
}
export default Projects
