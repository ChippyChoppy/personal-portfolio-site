import React from 'react';
import styled from 'styled-components';

const AboutP = styled.p`
    color: pink;
    background: gray;
`


const AboutMe = () => {
    return (
        <div>
            <ul>
                <h1>Frontend Developer</h1>
                <AboutP>Web designer and developer based in New York, NY. <br/> I utilize the best practices of user-centered design to facilitate creativity and accessibility in my work. <br/>
                The desire to create for the consumption and enjoyment of others is what drives me.
                </AboutP>

            </ul>
        </div>
    )

}

export default AboutMe