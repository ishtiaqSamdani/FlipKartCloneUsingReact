import React from 'react'

function EightSectionImg(props) {
    // console.log(props)
    return (
        <>
            {
                props.data.map(data => {
                    // console.log(data)
                    if (data.category === 'Top Offers On') {
                        let urlImg = 'http://206.189.124.254:9000' + data.image
                        // console.log(data)
                        return (
                            <div className="section-one-content" key={data._id}>
                                <img src={urlImg} alt="img1" />
                                <ul class="section-one-img-links">
                                    <li className="bold">{data.name}</li>
                                    <li>From &#8377; {data.price} +Extra50%Off</li>
                                    <li>{data.description}</li>
                                </ul>
                            </div>
                        )
                    }
                })
            }
        </>
    )
}

export default EightSectionImg