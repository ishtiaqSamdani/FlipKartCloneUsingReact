import React from 'react'
import location from '../../images/cart_page/location.svg'
import shield from '../../images/cart_page/shield.png'


class FirstCart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            data: [],
            id: this.props.id
        }
        this.deleteItem = this.deleteItem.bind(this)
    }

    async componentWillMount() {
        let url = await fetch(`http://206.189.124.254:9000/product/${this.state.id}`)
        let datas = await url.json()
        let data = await localStorage.cartItem ? JSON.parse(localStorage.cartItem) : []
        data.push(datas)
        localStorage.setItem('cartItem', JSON.stringify(data))
        this.setState({ data })
        // console.log(data)
    }

    deleteItem(e){
        let index = e.target.value
        let data = this.state.data
        data.splice(index, 1)
        localStorage.setItem('cartItem', JSON.stringify(data))
        this.setState({data})

    }


    render(){
        // console.log(this.state.data)
        let getData = this.state.data
        let total = 0
        // console.log(getData)
        getData.map(data => {
            let price = parseFloat(data.price)
            total += price
            // console.log(total)

        })
        return(
           <div>
            <div className="width1500">
                <div className="row">
                    <div className="col-7 cart_header_background">
                        <div className="cart_header flex space-btw">
                            <h3>My Cart ({getData.length})</h3>
                            <div className="cart_header_links">
                                <li><img src={location} /></li>
                                <li>Deliver to</li>
                                <li className="check"><input type="text" placeholder="Enter delivery pincode     Check" /></li>
                            </div>
                        </div><hr/>


                        {
                            getData.map((data, index) => {
                                // console.log(index)
                                let urlImg = 'http://206.189.124.254:9000' + data.image
                                return <>
                                    <div className="cart_product">
                            <div className="cart_product_flex_one flex space-btw">
                                <div className="cart_product_details flex space-btw">
                                    <div>
                                        <img src={urlImg} alt="img1" width="100" height="100" />
                                    </div>
                                    <div className="cart_product_details_links">
                                        <li className="one">{data.description}</li>
                                        <li className="two"><small>Size: 42</small></li>
                                        <li className="three"><small>Seller: {data.name}</small></li>
                                        <li className="four"><span><b>₹{data.price}</b></span> <span id="line-through"><small>₹1,799</small></span> <span id="percent"><small>61% Off</small></span> <span id="offers"><small>2 offers applied</small></span><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" class="_3p6_km"><g fill="none"><path d="M-1-1h16v16H-1"></path><path d="M7 0C3.136 0 0 3.136 0 7s3.136 7 7 7 7-3.136 7-7-3.136-7-7-7zm.7 10.5H6.3V6.3h1.4v4.2zm0-5.6H6.3V3.5h1.4v1.4z" fill="#388e3c" class=""></path></g></svg></li>
                                    </div>
                                </div>
                                <span><small>Delivery by Thu Oct 8 | <b style={{color: "green" }}>Free</b> <b style={{textDecoration: "line-through"}}>₹30</b></small></span>
                            </div>
                            <div className="cart_product_flex_two flex space-btw">
                            <div className="cart_product_action flex space-btw">
                                <div className="qty">
                                    <li><span id="minus">-</span></li>
                                    <li><span id="value">0</span></li>
                                    <li><span id="plus">+</span></li>
                                </div>
                                <div className="remove">
                                    <li id="save"><span>SAVE FOR LATER</span></li> 
                                    <li id="remove"   ><span><button value={index} onClick={(e) => this.deleteItem(e)}>REMOVE</button></span></li>
                                </div>
                            </div>
                                <div>
                                    <p></p>
                                </div>
                            </div>
                        </div><hr />
                                
                                
                                </>
                            })


                        }
                       
                        <div className="order">
                            <button>PLACE ORDER</button>
                        </div>

                    </div>

                    <div className="col-5">
                        <div className="cart_product_price_background">
                            <div className="cart_product_price_header">
                                <h4>PRICE DETAILS</h4>
                            </div><hr/>
                            <div className="price_items flex space-btw">
                                <p>Price ({getData.length} items)</p>
                                <p>₹{total}</p>
                            </div>
                           
                            <div className="delivery_charges flex space-btw">
                                <p>Delivery Charges</p>
                                <p style={{color: "green", fontWeight: "bold"}}>FREE</p>
                            </div><hr/>
                            <div className="total_amt flex space-btw">
                                <p>Total Amount</p>
                                <p>₹{total}</p>
                            </div><hr/>
                            <div>
                                <p style={{ color: "green", fontWeight: "bold" }}>You will save ₹3,866 on this order</p>
                            </div>
                        </div>

                        <div className="shield">
                            <li><img src={shield} alt="shield" width="25"/></li>
                            <li id="save">Safe and Secure Payments.Easy returns.100% <br/>Authentic products.</li>
                        </div>
                    </div>


                </div>
            </div>
        </div> 
        )
    }
}

export default FirstCart