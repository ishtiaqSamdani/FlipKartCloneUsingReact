import React from 'react'
import FourthSectionImage from './fourthsectionimg'


function FourthSection(props) {
    let data = props.data
    return (
        <div className="width1400">
            <div className="second-section-container margin-top">
                <FourthSectionImage data={data} />
            </div>
        </div>
    )
}

export default FourthSection