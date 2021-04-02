import React from 'react'
import OnTheWeb from '../components/OnTheWeb'
import ProjectDemos from '../components/ProjectDemos'

class ViewContainer extends React.Component {


    render() {
        return (
            <div>
                <p>Hi, I'm Rebecca</p>
                <p>Here's a little bit about me!</p>
                <p>Here are some of my projects</p>
                <ProjectDemos />
                <OnTheWeb />
            </div>
        )
    }
}

export default ViewContainer