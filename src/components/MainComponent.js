import React, { Component } from 'react';
import Home from './HomeComponent';
import Cart from './CartComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishInfo from './DishInfoComponent';
import { POPULARDATA } from '../shared/popularData';
import { CHEAPESTDATA } from '../shared/cheapestData';
import { QUICKESTDATA } from '../shared/quickestData';
import { PRODUCTSDATA } from '../shared/productsData'


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularData: POPULARDATA,
            cheapestData: CHEAPESTDATA,
            quickestData: QUICKESTDATA,
            productsData: PRODUCTSDATA,
            cartItems: 0,
            cartProducts: [],
            pickedDish: 0

            // 
        }
        this.updateCart = this.updateCart.bind(this);
    }
    updateCart(e) {
        console.log(e.target.value)
        this.setState(prevState => ({
            
            cartProducts: [e.target.value, ...prevState.cartProducts],
            cartItems: this.state.cartItems + 1
        }))
    }
    // updateDish(event) {
    //     console.log(event.target.value)
    //     this.setState({
    //         pickedDish: event.target.value
    //     })
    // }
    render() {
        
        const DishWidhId =({match}) => {
        // const pop = this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]
        // this.setState({
        //     pickedDish: this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]
        // })
        // <Cart popular={this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]} />
            return ( 
                <div>
                    <DishInfo popular={this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]}
                                onclick={this.updateCart}
                                index={this.state.cartProducts}
                                
                    />
                    {/* <Cart productsData={this.state.productsData} cartProducts={this.state.cartProducts} popular={this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]} index={this.state.cartProducts}/> */}
                 </div>
            )
        }
        return (
            
            <div>
                <Header cartItems={this.state.cartItems} />
                <Switch>
                    <Route exact path='/home' render={() =><Home onClick={this.updateDish} popularData={this.state.popularData} cheapestData={this.state.cheapestData} quickestData={this.state.quickestData} dish={this.state.popularData[0]}/>} />
                    <Route  exact path='/home/:popularId' component={DishWidhId}/>
                    <Route path='/contact' component={Contact}/>
                    <Route exact path='/cart' render={() =><Cart index={this.state.cartProducts} cartProducts={this.state.cartProducts} productsData={this.state.productsData}/>}/>
                    <Redirect to='/home'/> 
                </Switch>
                <Footer />
            </div>
         
        )
    }
}
export default Main;