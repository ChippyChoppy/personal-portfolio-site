import React from 'react';
import MyResume from '../FrontendResume.pdf'
import AllPages from './pdf/ViewAllPDFPages'

const Resume = () => {

    return (
        <div>
           <AllPages pdf={MyResume} />
        </div>
    )

}

export default Resume