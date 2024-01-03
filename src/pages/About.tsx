import data from '../data/Data.ts'
import './Page.sass'

const About = () => {
    return (
        <div id="page">
            {/*summary*/}
            <h1 id="header">About Me</h1>
            <p id="about_content">{data.aboutPage.summary}</p>

            {/*tech*/}
            <h1 id="header">Technical Proficiency</h1>
            {data.aboutPage.technical.map((obj) => {
                return (
                    <div>
                        <h2>{obj.key}</h2>
                        <h3>{obj.value}</h3>
                    </div>
                )
            })}

            {/*traits*/}
            <h1 id="header">Professional Traits</h1>
            {data.aboutPage.traits.map((obj) => {
                return (
                    <div>
                        <h2>{obj.key}</h2>
                        <h3>{obj.value}</h3>
                    </div>
                )
            })}

            {/*aspiration*/}
            <h1 id="header">Personal Aspiration</h1>
            <p>{data.aboutPage.aspiration}</p>
        </div>
    )
}
export default About
