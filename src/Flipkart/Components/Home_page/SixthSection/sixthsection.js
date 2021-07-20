import React from 'react'
import SixthSectionImage from './sixthsectionimg'


function SixthSection(props) {
    let data = props.data

    return (
        <div className="width1400">
            <div className="second-section-container margin-top">
            <SixthSectionImage data={data} />

            </div>
        </div>
    )
}

export default SixthSection