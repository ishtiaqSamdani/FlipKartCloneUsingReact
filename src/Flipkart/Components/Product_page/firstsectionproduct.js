import React from 'react'
import {Link} from 'react-router-dom'
import iconthree from '../../images/product_page/icon-three.png'
import icontwo from '../../images/product_page/icon-two.png'
import star from '../../images/product_page/star.svg'
import ruler from '../../images/product_page/ruler.svg'
import red from '../../images/product_page/red.jpeg'


function FirstSectionProduct(props){
    let data = props.data
    let imgUrl = 'http://206.189.124.254:9000' + data.image
    // console.log(data)
        return(
            <div className="width1400">
                <div className="row">
                    <div className="col-5">
                    <div className="product-part-one">
                        <div>
                            <img src={imgUrl} alt="product_img" width="100%"/>
                        </div>
                        <div className="product-part-one-btn flex space-around">
                            <Link to={`/cart/${data._id}`}>
                            <button id="btn1" className="bold"><svg class="_2fcmoV" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="_2JpNOH" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> ADD TO CART</button>
                            </Link>
                            <button id="btn2" className="bold">BUY NOW</button>
                        </div>
                        </div>
                    </div>

                    <div className="col-9 product-part-two">
                        <div className="flex space-btw">
                            <div className="first-ul">
                                <li>Home <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                                <li>Clothing and ....<svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                                <li>Topwear <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                                <li>Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                                <li>Men's Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                                <li>Formal Shirts <svg width="10" height="10" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="_3OIXYB"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000000" className="zTtNVt"></path></svg></li>
                            </div>
                            <div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="_1hqsXY"><path d="M14.78 5.883L9.032 0v3.362C3.284 4.202.822 8.404 0 12.606 2.053 9.666 4.927 8.32 9.032 8.32v3.446l5.748-5.883z" class="p5dWr2" fill="#c2c2c2" fill-rule="evenodd"></path></svg> Share</div>
                            </div>
                        </div>
                        <div className="description">
                            <h3>{data.name}</h3>
                            <p>{data.description}</p>
                            <small>Special price</small>
                            <div><span><b>₹{data.price}</b></span> <span>₹2,560</span><span>60% off</span></div>
                            <p>Or Pay ₹899 + <img src={icontwo} alt="icon-two" height="15" /> 100</p>
                            <p><span className="star">3.5 <img src={star} alt="star" /></span> <span>35 ratings and 5 reviews</span></p>
                        </div>
                        <div className="offers">
                            <h3>Available offers</h3>
                            <li><img src={iconthree} alt="icon-three" height="20" /><span>Special PriceGet extra 16.0% off (price inclusive of discount)</span> <span>T&C</span></li>
                            <li><img src={iconthree} alt="icon-three" height="20" /><span>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span> <span>T&C</span></li>
                            <li><img src={iconthree} alt="icon-three" height="20" /><span>Bank Offer10% off* with Axis Bank Buzz Credit Card</span> <span>T&C</span></li>
                            <li><img src={iconthree} alt="icon-three" height="20" /><span>Bank Offer5% off upto ₹25 on any prepaid instrument</span> <span>T&C</span></li>
                            <small>+3 more offers</small>
                        </div>

                        <div className="check">
                            <input type="text" placeholder="Enter delivery pincode     Check" />
                        </div>

                        <div className="text">
                            <li>Usually delivered in4 days</li>
                            <li><small>Enter pincode for exact delivery dates/charges</small></li>
                            <p>View Details</p>
                        </div>

                        <div className="size flex space-btw">
                            <p>Size</p>
                            <ul>
                                <li><button>M</button></li>
                                <li><button>L</button></li>
                                <li><button>XL</button></li>
                                <li><button>XXL</button></li>
                                <li>Size Chart <img src={ruler} alt="ruler" /></li>
                            </ul>
                            <p></p>
                        </div>

                        <div className="specify flex space-btw">
                            <p>Specification</p>
                            <ul>
                                <li><img src={red} alt="red" height="15" /></li>
                                <li><small>Fits:</small></li>
                                <li><small>Slim</small></li>
                                <li><small>|</small></li>
                                <li><small>Size:</small></li>
                                <li><small>XL</small></li>
                            </ul>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                            <p></p>
                        </div>

                        <div className="product_details flex space-btw">
                            <h2>Product Details</h2>
                            <h3>+</h3>
                        </div>

                        <div className="rating_review flex space-btw">
                            <div className="r_r">
                                <li><h3>Ratings & Reviews</h3></li>
                                <li><span className="star">3.5 <img src={star} alt="star" /></span> <span>35 ratings and 5 reviews</span></li>
                            </div>
                            <p>Rate Product</p>
                        </div>

                        <div className="comment_side flex space-btw">
                            <div className="comment_main">
                                <li className="comment_star"><span className="star">3 <img src={star} alt="star" /></span> <span>Nice clothe</span></li>
                                <li>SANGARALINGAM N <small>2 months ago</small></li>
                                <li><svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="_3Zp_NJ"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg> Certified Buyer, Rs Mangalam</li>
                            </div>
                            <div className="likes flex space-btw">
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 1</li>
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v _1FP7V7"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 0</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="4" height="15"><g fill="#C2C2C2" fill-rule="evenodd"><circle cx="2" cy="2" r="2" /><circle cx="2" cy="7" r="2" /><circle cx="2" cy="13" r="2" /></g></svg></li>
                            </div>
                        </div><hr/>

                        <div className="comment_side flex space-btw">
                            <div className="comment_main">
                                <li className="comment_star"><span className="star">3 <img src={star} alt="star" /></span> <span>Nice clothe</span></li>
                                <li>SANGARALINGAM N <small>2 months ago</small></li>
                                <li><svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="_3Zp_NJ"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg> Certified Buyer, Rs Mangalam</li>
                            </div>
                            <div className="likes flex space-btw">
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 1</li>
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v _1FP7V7"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 0</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="4" height="15"><g fill="#C2C2C2" fill-rule="evenodd"><circle cx="2" cy="2" r="2" /><circle cx="2" cy="7" r="2" /><circle cx="2" cy="13" r="2" /></g></svg></li>
                            </div>
                        </div><hr />

                        <div className="comment_side flex space-btw">
                            <div className="comment_main">
                                <li className="comment_star"><span className="star">3 <img src={star} alt="star" /></span> <span>Nice clothe</span></li>
                                <li>SANGARALINGAM N <small>2 months ago</small></li>
                                <li><svg width="14" height="14" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class="_3Zp_NJ"><g><circle cx="6" cy="6" r="6" fill="#878787"></circle><path stroke="#FFF" stroke-width="1.5" d="M3 6l2 2 4-4" fill="#878787"></path></g></svg> Certified Buyer, Rs Mangalam</li>
                            </div>
                            <div className="likes flex space-btw">
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 1</li>
                                <li><svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" class="yW9s2v _1FP7V7"><path fill="#000000" class="_3Xc5dR" d="M9.58.006c-.41.043-.794.32-1.01.728-.277.557-2.334 4.693-2.74 5.1-.41.407-.944.6-1.544.6v8.572h7.5c.45 0 .835-.28 1.007-.665 0 0 2.207-6.234 2.207-6.834 0-.6-.47-1.072-1.07-1.072h-3.216c-.6 0-1.07-.535-1.07-1.07 0-.537.835-3.387 1.006-3.944.17-.557-.107-1.157-.664-1.35-.15-.043-.257-.086-.407-.064zM0 6.434v8.572h2.143V6.434H0z" fill-rule="evenodd"></path></svg> 0</li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="4" height="15"><g fill="#C2C2C2" fill-rule="evenodd"><circle cx="2" cy="2" r="2" /><circle cx="2" cy="7" r="2" /><circle cx="2" cy="13" r="2" /></g></svg></li>
                            </div>
                        </div><hr />

                        <div className="post_question flex space-btw">
                            <h4>Have doubts regarding this product?</h4>
                            <p id="question">Post Your Question</p>
                        </div>
                    </div>
                </div>
            </div>
        )
        }


export default FirstSectionProduct