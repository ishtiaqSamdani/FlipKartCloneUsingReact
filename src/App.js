import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartPage from './Flipkart/Components/cart_page/cart';
import HomePage from './Flipkart/Components/Home_page/home'
import NavBar from './Flipkart/Components/Navbar/nav';
import ProductPage from './Flipkart/Components/Product_page/product';
import ShopPage from './Flipkart/Components/Shop_page/shop';
import './style.css'


class App extends React.Component{
	
	render(){
		return(
			<div>
				<Router>
					<div>
					<NavBar />
						<Switch>
							<Route path="/" exact component={HomePage}  />
							<Route path="/shop" component={ShopPage} />
							<Route path="/product/:id" component={ProductPage} />
							<Route path="/cart/:id" component={CartPage} />
						</Switch>
					</div>
				</Router>
			</div>
		)
	}
}

export default App




