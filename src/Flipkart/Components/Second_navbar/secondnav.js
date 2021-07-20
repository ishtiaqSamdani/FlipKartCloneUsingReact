import React from 'react'
import {Link} from 'react-router-dom'

function SecondNav(){
    return(
        <div className="second-nav">
            <ul className="width1250 flex space-btw  opacity">
                <li className="dropdown"><div className="dropbtn" role="button">Electronics <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">TVs & Appliances <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Men <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <div>
                                <ul>
                                    <h4>Foot Wear</h4>
                                    <li>Sport Shoes</li>
                                    <li>Casual Shoes</li>
                                    <li>Formal Shoes</li>
                                    <li>Sandal & Floaters</li>
                                    <li>Loafers</li>
                                    <li>Flip Flops</li>
                                    <li>Boots</li>
                                    <li>Running Shoes</li>
                                    <li>Sneakers</li>
                                </ul>
                                <ul>
                                    <h4>Men's Grooming</h4>
                                    <li>Deodorants</li>
                                    <li>Perfumes</li>
                                    <li>Beard Care & Grooming</li>
                                    <li>Shaving & Aftershave</li>
                                    <li>Sexual Wellness</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h4>Clothing</h4>
                                    <h4>Top Wear</h4>
                                    <li>T-Shirt</li>
                                    <Link to="/shop">
                                    <li>Formal Shirt</li>
                                    </Link>
                                    <li>Casual Shirt</li>
                                </ul>
                                <ul>
                                    <h4>Bottom Wear</h4>
                                    <li>Jeans</li>
                                    <li>Casual Trouser</li>
                                    <li>Formal Trousers</li>
                                    <li>Track Pants</li>
                                    <li>Shorts</li>
                                    <li>Cargos</li>
                                    <li>Three Fourths</li>
                                    <h4>Suit, Blazer & Waistcoats</h4>
                                    <h4>Tie, Socks, Cap & More</h4>
                                    <h4>Fabrics</h4>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h4>Winter Wear</h4>
                                    <li>Sweatshirt</li>
                                    <li>Jackets</li>
                                    <li>Sweater</li>
                                    <li>Track Suite</li>
                                </ul>
                                <ul>
                                    <h4>Ethnic Wear</h4>
                                    <li>Kurta</li>
                                    <li>Ethnic Sets</li>
                                    <li>Sherwanis</li>
                                    <li>Ethnic Pyjama</li>
                                    <li>Dhoti</li>
                                    <li>Lungi</li>
                                </ul>
                                <ul>
                                    <h4>Innerwear & Loungewear</h4>
                                    <li>Briefs & Trunks</li>
                                    <li>Vests</li>
                                    <li>Boxers</li>
                                    <li>Pyjamas and Lounge Pants</li>
                                    <li>Thermals</li>
                                    <li>Night Suits</li>
                                    <li>Raincoats & Windcheaters</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h4>Watches</h4>
                                    <li>Fastrack</li>
                                    <li>Casio</li>
                                    <li>Titan</li>
                                    <li>Fossil</li>
                                    <li>Sonata</li>
                                </ul>
                                <ul>
                                    <h4>Accessories</h4>
                                    <li>Backpacks</li>
                                    <li>Wallets</li>
                                    <li>Belts</li>
                                    <li>Sunglasses</li>
                                    <li>Luggage & Travel</li>
                                    <li>Frames</li>
                                    <li>Jewellery</li>
                                    <h4>Sports & Fitness Store</h4>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <h4>Smart Watches</h4>
                                    <h4>Smart Bands</h4>
                                    <h4>Personal Care Appliances</h4>
                                    <li>Trimmers</li>
                                    <li>Shavers</li>
                                    <li>Grooming Kits</li>
                                </ul>
                                <ul>
                                    <h4>Featured</h4>
                                    <h4>Swatches Store</h4>
                                    <h4>Bags & Wallet</h4>
                                    <li>T-Shirt Store</li>
                                    <li>Adidas</li>
                                    <li>Beardo</li>
                                    <li>Reebok</li>
                                    <li>Skechers</li>
                                    <li>Nike</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Women <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Baby & Kids <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Home & Furniture <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Sports, Books & More <svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="_34Yjv1"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" class="_14jSvk"></path></svg></div>
                    <div className="width1250 dropdown-content">
                        <div className="flex space-btw ">
                            <ul>
                                <h4>Header One</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>Four</li>
                            </ul>
                            <ul>
                                <h4>Header Two</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Three</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                            <ul>
                                <h4>Header Four</h4>
                                <li>One</li>
                                <li>Two</li>
                                <li>Three</li>
                                <li>FOur</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className="dropdown"><div className="dropbtn" role="button">Flights</div></li>
                <li className="dropdown"><div className="dropbtn" role="button">Offer Zone</div></li>
            </ul>
        </div>
    )
}

export default SecondNav