import React from 'react';
import resume from '../RobbinsRebeccaResume.pdf'
import SinglePage from './pdf/SinglePage'

const Resume = () => {

    return (
        <>
           <SinglePage resume={resume} />
        </>
    )

}

export default Resume