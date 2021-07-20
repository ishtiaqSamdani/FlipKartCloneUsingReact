import React from 'react'
import FirstSection from '../Home_page/FirstSection/firstsection'
import SecondSection from '../Home_page/SecondSection/secondsection'
import ThirdSection from '../Home_page/ThirdSection/thirdsection'
import FourthSection from '../Home_page/FourthSection/fourthsection'
import FifthSection from '../Home_page/FifthSection/fifthsection'
import SixthSection from '../Home_page/SixthSection/sixthsection'
import SeventhSection from '../Home_page/SeventhSection/seventhsection'
import EightSection from '../Home_page/EightSection/eightsection'
import NinethSection from '../Home_page/NinethSection/ninenthsection'



class DataHome extends React.Component{
    constructor(){
        super()
        this.state ={
            data: []
        }
    }

    async componentWillMount(){
        let url = await fetch('http://206.189.124.254:9000/products')
        let data = await url.json()
        this.setState({data})
    }

    render(){
        return(
            <div>
                <FirstSection data={this.state.data} />
                <SecondSection data={this.state.data} />
                <ThirdSection  data={this.state.data}/>
                <FourthSection data={this.state.data} />
                <FifthSection  data={this.state.data}/>
                <SixthSection data={this.state.data}/>
                <SeventhSection data={this.state.data} />
                <EightSection data={this.state.data}/>
                <NinethSection data={this.state.data} />
            </div>
        )
    }
}

export default DataHome