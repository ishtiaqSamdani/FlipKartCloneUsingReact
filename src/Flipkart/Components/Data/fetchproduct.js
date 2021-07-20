import React from 'react'
import FirstSectionProduct from '../Product_page/firstsectionproduct'




class DataProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            id: this.props.id 
        }
    }

    async componentWillMount() {
        let url = await fetch(`http://206.189.124.254:9000/product/${this.state.id}`)
        let data = await url.json()
        this.setState({ data })
        // console.log(data)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <FirstSectionProduct data={this.state.data} />
            </div>
        )
    }
}


export default DataProduct