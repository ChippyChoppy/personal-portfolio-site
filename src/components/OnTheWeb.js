import React from 'react'
import TalkTechLogo from './TalkTechLogo.png'


const OnTheWeb = () => {
    return (
        <div>
            <p>Check out my YouTube channel 
                <br/>
                <a href="https://www.youtube.com/channel/UCwnDKhkK8wWYI2r8zEYYJoQ" > <img src={TalkTechLogo} alt="neon pink, teal, and blue logo for YouTube channel, talkTech with bec" /></a> </p>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/bmeNrPKNpKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <br/>
                <iframe width="560" height="315"
                    src="https://www.youtube.com/embed/JUkr5othriM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
        </div>
    )
}

export default OnTheWeb