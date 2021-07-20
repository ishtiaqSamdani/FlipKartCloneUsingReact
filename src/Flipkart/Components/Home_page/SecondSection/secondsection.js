import React from 'react'
import SecondSectionImage from './secondsectionimg'


function SecondSection(props){
    let data = props.data

    return(
    <div>
                            <div className="width1400">
                                <div className="second-section-container margin-top">
                                    <SecondSectionImage data={data} />
                                </div>
                            </div>
                      
    </div>
    )
}

export default SecondSection