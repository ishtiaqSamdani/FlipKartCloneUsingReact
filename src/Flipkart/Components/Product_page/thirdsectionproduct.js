import React from 'react'
import $ from 'jquery'

class ThirdSectionProduct extends React.Component{
    constructor() {
        super()
        this.scrollEight = this.scrollEight.bind(this)
    }


    scrollEight(direction) {
        let far = $('.image-container-nine').width() / 2 * direction;
        let pos = $('.image-container-nine').scrollLeft() + far;
        $('.image-container-nine').animate({ scrollLeft: pos }, 1000)
    }

    render() {
        return (
        <div>
            <div className="width1400">
            <div className="margin-top">
                <div className="deals flex space-btw">
                    <div>
                        <h2>Bought Together</h2>
                    </div>
                    <div>
                        
                    </div> 
                </div>
                <div className="section-one">
                <a className="prev-arrow prev" onClick={this.scrollEight.bind(null, -1)}><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg></a>
                <div className="image-container-nine section-one-img">
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b1.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                            <li className="bold">Campus, Sparx & more</li>
                            <li>From &#8377; 199+Extra50%Off</li>
                            <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b2.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b3.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b4.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b5.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b6.jpeg")} alt="img1" width="100%"/>
                        <ul class="section-one-img-links">
                                <li className="bold">Campus, Sparx & more</li>
                                <li>From &#8377; 199+Extra50%Off</li>
                                <li>Shoes, Sandals & more</li>
                        </ul>
                    </div>
                    <div className="section-one-content">
                        <img src={require("../../images/product_page/b7.jpeg")} alt="img1" width="100%"/>
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

export default ThirdSectionProduct