import React from 'react'
import CartFooter from './cartfooter'
import DataCart from '../Data/fetchcart'
import SecondNav from '../Second_navbar/secondnav'


function CartPage({match}){
    let id = match.params.id
        return(
            <div>
                <SecondNav />
                <DataCart id={id} />
                <CartFooter />
            </div>
        )
}

export default CartPage