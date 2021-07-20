import React from 'react'
import img1 from '../../images/home_page/banner1.jpg'
import img2 from '../../images/home_page/banner2.jpg'
import img3 from '../../images/home_page/banner3.jpg'
import img4 from '../../images/home_page/banner4.jpg'
import img5 from '../../images/home_page/banner5.jpg'
import img6 from '../../images/home_page/banner6.jpg'


class Banner extends React.Component {
    constructor() {
        super()

        this.state = {
            images: [ img1, img2, img3, img4, img5, img6],
            currentIndex: 0,
            translateValue: 0
        }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }))
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the if condition above
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} />
                        ))
                    }
                </div>

                <LeftArrow
                    goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}


const Slide = ({ image }) => {
    const styles = {
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center"
    }
    return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
    return (
        <div className="backArrow arrow-back" onClick={props.goToPrevSlide}>
            <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" ><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg>
        </div>
    );
}


const RightArrow = (props) => {
    return (
        <div className="nextArrow arrow-next" onClick={props.goToNextSlide}>
            <svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_2gp_O1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_3Zc0XY"></path></svg>
        </div>
    );
}



export default Banner