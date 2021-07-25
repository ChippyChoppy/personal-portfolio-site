import React from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../RobbinsRebeccaResume.pdf'

const Resume = () => {

    return (
        <div>
            <Document 
                file={resume}>
                <Page pageNumber={1} />
            </Document>
        </div>
    )

}

export default Resume