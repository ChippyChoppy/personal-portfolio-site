import React from 'react';
import MyResume from '../FrontendResume.pdf'
import SinglePage from './pdf/SinglePage'
import AllPages from './pdf/AllPages'

const Resume = () => {

    return (
        <>
           <SinglePage pdf={MyResume} />
        </>
    )

}

export default Resume