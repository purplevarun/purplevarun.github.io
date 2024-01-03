import './Page.sass'
import data from '../data/Data.ts'
import RainbowText from 'rainbow-text-react'
import Formatter from '../components/Formatter/Formatter.tsx'
import useDarkMode from '../context/DarkMode/DarkModeHook.tsx'

const About = () => {
    const { darkMode } = useDarkMode()
    return (
        <div id="page">
            {/*summary*/}
            <h1 id="header">About Me</h1>
            <p id="about_content">
                <Formatter text={data.aboutPage.summary} />
            </p>

            {/*fun fact*/}
            {data.aboutPage.funFact && (
                <div>
                    <h4>Fun Fact</h4>
                    {/*@ts-expect-error -> legacy code*/}
                    <RainbowText
                        colorMode={darkMode ? 'dark' : 'light'}
                        fontSize={10}
                    >
                        {data.aboutPage.funFact}
                    </RainbowText>
                </div>
            )}

            {/*tech*/}
            <h1 id="header">Technical Proficiency</h1>
            {data.aboutPage.technical.map((obj) => {
                return (
                    <div key={obj.key}>
                        <h2>{obj.key}</h2>
                        <Formatter text={obj.value} />
                    </div>
                )
            })}

            {/*traits*/}
            <h1 id="header">Professional Traits</h1>
            {data.aboutPage.traits.map((obj) => {
                return (
                    <div key={obj.key}>
                        <h2>{obj.key}</h2>
                        <Formatter text={obj.value} />
                    </div>
                )
            })}

            {/*aspiration*/}
            <h1 id="header">Personal Aspiration</h1>
            <Formatter text={data.aboutPage.aspiration} />
        </div>
    )
}
export default About
