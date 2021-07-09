import React from 'react'
import styled from 'styled-components'

const VideoStyling = styled.iframe

const ProjectDemos = () => {
    return (
        <div>
        <p>Project Demos</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DdHrHkcM9oA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5AU6HMsWNEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5nUFTT___-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default ProjectDemos