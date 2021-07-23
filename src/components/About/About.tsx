import './About.css'
import { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import me from '../../assets/images/me.jpg'
import down from '../../assets/icons/down.svg'
import { Pace, WindupChildren } from 'windups'
import email from '../../assets/icons/email.svg'
import github from '../../assets/icons/github.svg'
import linkedin from '../../assets/icons/linkedin.svg'

const About = () => {
    const [compact, setCompact] = useState(false)

    useScrollPosition(({ currPos }) => {
        let temp = currPos.y <= -3
        if (temp !== compact) setCompact(temp)
    }, [compact])

    const strings = [
        'Ryerson University Computer Science Student',
        'Open-Source Software Enthusiast',
        'Perfectionist'
    ]
    const [activeString, setActiveString] = useState(0)

    setTimeout(() => {
        activeString === strings.length - 1 ? setActiveString(0) : setActiveString(activeString + 1)
    }, 4000)

    return (
        <div id="about" className={"about flexColumn centerFlex stdPadding shadow2 col1" + (compact ? " compact" : "")}>
            <div className="flexRow centerFlex inner">
                <img alt="Imran Remtulla" src={me} className="me shadow" />
                <div className="flexColumn intro">
                    <p>Hi</p>
                    <h1>I'm <span className="accent">Imran Remtulla</span></h1>
                    <div className="typewriter">
                        &nbsp;
                        <WindupChildren>
                            <Pace ms={50}>{strings[activeString]}&nbsp;</Pace>
                        </WindupChildren>
                    </div>
                    <div className="contact">
                        <a href="mailto:iremtulla15@gmail.com" target="_blank" rel="noreferrer"><img alt="Email" src={email} className="icon"></img></a>
                        <a href="https://github.com/ImranR98" target="_blank" rel="noreferrer"><img alt="GitHub" src={github} className="icon"></img></a>
                        <a href="https://linkedin.com/in/iremtulla" target="_blank" rel="noreferrer"><img alt="LinkedIn" src={linkedin} className="icon"></img></a>
                    </div>
                </div>
            </div>
            <div className="down">
                <img alt="Scroll down" src={down} className={(compact ? " fadeOut" : " fadeIn")} />
            </div>
        </div >
    )
}

export default About;