import data from '../data/Data.ts'
import './Page.sass'

const About = () => {
    return (
        <div id="page">
            <h1 id="page_header">{data.about.heading}</h1>
            <p id="about_content">{data.about.content}</p>
        </div>
    )
}
export default About
