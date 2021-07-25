import React from 'react'
import OnTheWeb from '../components/OnTheWeb'
import ProjectDemos from '../components/ProjectDemos'
import Resume from '../components/Resume'
import AboutMe from '../components/AboutMe'

class ViewContainer extends React.Component {

    render() {
        return (
            <div>
                <AboutMe />
                <Resume />
                <ProjectDemos />
                <OnTheWeb />
            </div>
        )
    }
}

export default ViewContainer