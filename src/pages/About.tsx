import './Page.sass'
import data from '../data/Data.ts'
import RainbowText from 'rainbow-text-react'
import Formatter from '../components/Formatter/Formatter.tsx'
import useDarkMode from '../context/DarkMode/DarkModeHook.tsx'
import {
    FIRST_HEADING_COLOR,
    THIRD_HEADING_COLOR,
} from '../constants/Colors.ts'

const About = () => {
    const { darkMode } = useDarkMode()
    return (
        <div id="page">
            {/*summary*/}
            <h1 id="header" style={{ color: FIRST_HEADING_COLOR }}>
                About Me
            </h1>
            <p id="content">
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
            <h1 id="header" style={{ color: FIRST_HEADING_COLOR }}>
                Technical Proficiency
            </h1>
            {data.aboutPage.technical.map((obj) => {
                return (
                    <div key={obj.key} id="content">
                        <h2 style={{ color: THIRD_HEADING_COLOR }}>
                            {obj.key}
                        </h2>
                        <Formatter text={obj.value} />
                    </div>
                )
            })}

            {/*traits*/}
            <h1 id="header" style={{ color: FIRST_HEADING_COLOR }}>
                Professional Traits
            </h1>
            {data.aboutPage.traits.map((obj) => {
                return (
                    <div key={obj.key} id="content">
                        <h2 style={{ color: THIRD_HEADING_COLOR }}>
                            {obj.key}
                        </h2>
                        <Formatter text={obj.value} />
                    </div>
                )
            })}

            {/*aspiration*/}
            <h1 id="header" style={{ color: FIRST_HEADING_COLOR }}>
                Personal Aspiration
            </h1>
            <span id="content">
                <Formatter text={data.aboutPage.aspiration} />
            </span>
        </div>
    )
}
export default About
