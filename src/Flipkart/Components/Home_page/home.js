import React from 'react'
import Banner from './banner'
import HomeFooter from './homefooter'
import NavBar from '../Navbar/nav'
import SecondNav from '../Second_navbar/secondnav'
import Footer from '../Footer_page/footer'
import DataHome from '../Data/fetchhome'

function HomePage(props){
    console.log(props)
    return(
        <div>
        <SecondNav />
        <Banner />
        <DataHome />
        <HomeFooter />
        <Footer />
        </div>
    )
}

export default HomePage