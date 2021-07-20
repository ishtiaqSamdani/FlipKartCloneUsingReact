import React from 'react'
import FirstSectionShop from '../Shop_page/FirstSection/firstsectionshop'
import SecondSectionShop from '../Shop_page/SecondSection/secondsectionshop'

class DataShop extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    async componentWillMount() {
        let url = await fetch('http://206.189.124.254:9000/products')
        let data = await url.json()
        this.setState({ data })
    }

    render() {
        return (
            <div className="width1400">
                <div className="row">
                    <FirstSectionShop />
                    <SecondSectionShop data={this.state.data} />
                </div>
            </div>
        )
    }
}


export default DataShop