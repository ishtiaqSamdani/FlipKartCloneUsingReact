import React from 'react'
import checkone from '../../../images/product_page/checkone.png'

class FirstSectionShop extends React.Component{
    constructor(){
        super()
        this.state = {
            ranger: "ranger",
            priceNum: "", 
            priceNumTwo: "2500+", 
            checkOne: "checkOne", 
            search: "search"
        }

        this.priceRange = this.priceRange.bind(this)

    }


    priceRange(event){
        let {name, value} = event.target
        this.setState({
            [name]:value
        })
    }
    render(){
        return(
                    <div className="col-3">
                        <div className="shop-part-one">
                        <h2>Filters</h2><hr/>
                        <ul>
                            <h4>CATEGORIES</h4>
                            <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Clothing and Accessories</li>
                            <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Topwear</li>
                            <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Shirts</li>
                            <li><svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYL"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg> Men's Shirts</li>
                            <h4>Formal Shirts</h4>
                        </ul><hr/>
                        <div className="price">
                            <h3>Price</h3>
                            <input type="range" min="1" max="100" value="100" name="ranger" onChange={this.priceRange} />
                            <div className="select flex space-btw">
                                <select name="priceNum" value={this.state.priceNum} onChange={this.priceRange}>
                                    <option value="Min">Min</option>
                                    <option value="250">250</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                    <option value="1500">1500</option>
                                    <option value="2000">2000</option>
                                    <option value="2500">2500</option>
                                </select>
                                <span>to</span>
                                <select name="priceNumTwo" value={this.state.priceNumTwo} onChange={this.priceRange}>
                                    <option value="250">250</option>
                                    <option value="500">500</option>
                                    <option value="1000">1000</option>
                                    <option value="1500">1500</option>
                                    <option value="2000">2000</option>
                                    <option value="2500+">2500+</option>
                                </select>
                            </div>
                        </div><hr/>

                        <div className="flex space-btw">
                            <div>
                                <input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} />
                                <img src={checkone} alt="CheckOne" width="60"/>
                            </div>
                            <div className="question">
                                <span>?</span>
                            </div>
                        </div><hr/>

                        <div className="brand">
                            <div className="flex space-btw">
                                <h4>BRAND</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div>
                                <input type="text" name="search" placeholder="Search Brand" onChange={this.priceRange} />
                            <div>
                                <ul>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Levi's</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Lee</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> U.S Polo Assn</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Peter England</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> United Colors of Benetton</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> John Players</li>
                                    <li>1291 MORE</li>
                                </ul>
                            </div>
                        </div><hr />

                        <div className="rating">
                            <div className="flex space-btw">
                                <h4>CUSTOMER RATING</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div>
                            <div>
                                <ul>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> 4★ & above</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> 3★ & above</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> 2★ & above</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> 1★ & above</li>
                                </ul>
                            </div>
                        </div><hr/>

                        <div className="brand">
                            <div className="flex space-btw">
                                <h4>SIZE</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr/>
                            <div className="flex space-btw">
                                <h4>OFFERS</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div>
                            <div>
                                <ul>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Bank Offer</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Buy More, Save More</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> No Cost EMI</li>
                                    <li><input type="checkbox" name="checkOne" value={this.state.checkOne} onChange={this.priceRange} /> Special Price</li>
                                </ul>
                            </div><hr/>
                            <div className="flex space-btw">
                                <h4>DISCOUNT</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr/>
                            <div className="flex space-btw">
                                <h4>SLEEVES</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>FIT</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>COLOR</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>IDEAL FOR</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>OCASSION</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>DISCOUNT</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>COLLAR</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>FABRIC</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>PATTERN</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>THEME</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>PACK OF</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                            <div className="flex space-btw">
                                <h4>AVAILABILITY</h4>
                                <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYK"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg>
                            </div><hr />
                        </div>
                        </div>
                    </div>
        )
    }
}

export default FirstSectionShop