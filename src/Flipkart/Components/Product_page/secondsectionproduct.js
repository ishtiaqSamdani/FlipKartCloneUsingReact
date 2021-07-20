import React from 'react'
import $ from 'jquery'

class SecondSectionProduct extends React.Component{
    constructor() {
        super()
        this.scrollEight = this.scrollEight.bind(this)
    }


    scrollEight(direction) {
        let far = $('.image-container-eight').width() / 2 * direction;
        let pos = $('.image-container-eight').scrollLeft() + far;
        $('.image-container-eight').animate({ scrollLeft: pos }, 1000)
    }

    render() {
        return (
        <div>
            <div className="width1400">
            <div className="margin-top">
                <div className="deals flex space-btw">
                    <div>
                        <h2>Similar Products</h2>
                    </div>
                    <div>
                        
                    </div> 
                </div>
                <div className="section-one">
                <a className="prev-arrow prev" onClick={this.scrollEight.bind(null, -1)}><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg></a>
                <div className="image-container-eight section-one-img">
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s1.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                            <li className="bold">Campus, Sparx & more</li>
                            <li>From &#8377; 199+Extra50%Off</li>
                            <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s2.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s3.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s4.jpeg")} alt="img1" width="100%"/>\
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s5.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s6.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/s7.jpeg")} alt="img1" width="100%"/>
                        <ul className="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                </div>
                <a className="next-arrow next" onClick={this.scrollEight.bind(null, 1)}><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2gp_O1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg></a>
            </div>
            </div>
            </div>
        </div>
        )
    }
}

export default SecondSectionProduct