import React from 'react'
import SecondSectionShopImg from './secondsectionshopimg'


function SecondSectionShop(props){
    let data = props.data
    return(
                    <div className="col-9 shop-part-two">
                        <div className="first-ul">
                            <li>Home <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            <li>Clothing and ....<svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            <li>Topwear <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            <li>Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            <li>Men's Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            <li>Formal Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                        </div>

                        <div>
                            <p>Formal shirts are an age-old classic. Whether it’s for a black-tie event or a job interview, discover formal shirts for men for all occasions and seasons under our roof. Shop from trusted names in the men’s fashion scene including Arrow, Peter England, Park Avenue and Van Heusen among others at best prices. Price list last updated on 02-Oct-20. Big festive price cuts soon approaching!</p>
                        </div>

                        <div>
                            <li><b style={{paddingRight:"10px"}}>Formal Shirt</b>(Showing 1 - 40 products of 80,031 products)</li>
                        </div>

                        <div className="second-ul">
                            <li><b>Sort By</b></li>
                            <li style={{ color: "#2474F0", textDecoration:"uderline"}}>Popularity</li>
                            <li>Price--Low to High</li>
                            <li>Price--High to Low</li>
                            <li>Newest First</li>
                        </div>


            <div className="shop-img-container">
                <SecondSectionShopImg data={data} />
            </div>

                        
    </div>

            
    )

}

export default SecondSectionShop