import React from 'react'
import DataShop from '../Data/fetchshop'
import Footer from '../Footer_page/footer'
import HomeFooter from '../Home_page/homefooter'
import NavBar from '../Navbar/nav'
import SecondNav from '../Second_navbar/secondnav'


function ShopPage(){
    return(
        <div>
            <SecondNav />
            <DataShop />
            <HomeFooter />
            <Footer />
        </div>
    )
}


export default ShopPage