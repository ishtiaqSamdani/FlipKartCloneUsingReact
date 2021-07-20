import React from 'react'
import $ from 'jquery'
import FirstSectionImg from './firstsectionimg';
import clock from '../../../images/home_page/clock.png'





class FirstSection extends React.Component{
    constructor(props) {
        super(props)
        this.scroll = this.scroll.bind(this)
    }


    scroll(direction) {
        let far = $('.image-container').width() / 2 * direction;
        let pos = $('.image-container').scrollLeft() + far;
        $('.image-container').animate({ scrollLeft: pos }, 1000)
    }

    render() {
        let data = this.props.data
        return (
        <div>
                             <div className="width1400" >
                                 <div className="row">
                                     <div className="col-10 margin-top">
                                         <div className="deals flex space-btw">
                                             <div>
                                                 <h2>Deals of the the Day <img src={clock} alt="img" width="15" /> <span>00 : 44 : 25 Left</span></h2>
                                             </div>
                                             <div>
                                                 <h4>VIEW ALL</h4>
                                             </div>
                                         </div>
                                         <div className="section-one">
                                             <a className="prev-arrow prev" onClick={this.scroll.bind(null, -1)}><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg></a>
                                         <div className="image-container section-one-img">
                                            <FirstSectionImg data={data} />
                                         </div>
                                         <a className="next-arrow next" onClick={this.scroll.bind(null, 1)}><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2gp_O1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg></a>
                                         </div>
                                     </div>
                                     <div className="col-2 margin-top">
                                        {
                                            data.map(data =>{
                                                if (data.category === 'Side image'){
                                                    let urlImg = 'http://206.189.124.254:9000' + data.image
                                                    return <img src={urlImg} alt="side_img" width="230" height="356" />
                                                }
                                            })
                                        }
                                     </div>
                                 </div>
                             </div>

        </div>
        )
    }
}

export default FirstSection