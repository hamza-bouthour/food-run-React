import React, { Component } from 'react';
import Home from './HomeComponent';
import Cart from './CartComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishInfo from './DishInfoComponent';
import Account from './AccountComponent';
import { POPULARDATA } from '../shared/popularData';
import { CHEAPESTDATA } from '../shared/cheapestData';
import { QUICKESTDATA } from '../shared/quickestData';
import { PRODUCTSDATA } from '../shared/productsData'
import { Button } from 'bootstrap';


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
            pickedDish: 0,
            total : 0,
            button: {
                enabled: true,
                text: 'add'
            },
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',

        }
        this.updateCart = this.updateCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {

        console.log(event)
        // event.preventDefault();
        // this.setState({
        //     firstName: 'hamza'
        // });
        for (const [key, value] of Object.entries(event)) {
            
                this.setState({
                 [key]: value
             });
             console.log(this.state.key)

    }
  
         
    } 
    updateCart(e) {
        console.log(e.target.className)
        e.target.style.color = 'green'
        this.setState(prevState => ({
            
            cartProducts: [e.target.value, ...prevState.cartProducts],
            cartItems: this.state.cartItems + 1
        }))
    }
    
    removeAll() {
        this.setState({
            cartProducts: [],
            cartItems: 0
        })
    }
    removeItem(event) {
      const asba = this.state.cartProducts
      for (let i=0; i<asba.length; i++) {
          if (asba[i] === event.target.value) {
              console.log(asba.splice(i, 1))
              console.log(asba)
              this.setState({
                cartProducts: asba,
                cartItems: this.state.cartItems - 1
            })
          }
      }
    }
    render() {
        const DishWidhId =({match}) => {
            return ( 
                <div>
                    <DishInfo popular={this.state.popularData.filter(popular => popular.id === +match.params.popularId)[0]}
                                onclick={this.updateCart}
                                index={this.state.cartProducts}
                                cartItems={this.state.cartItems}     
                    />
                 </div>
            )
        }
        return (
            
            <div>
                <Header cartItems={this.state.cartItems} />
                <Switch>
                    <Route exact path='/home' render={() =><Home userName={this.state.firstName} onClick={this.updateDish} popularData={this.state.popularData} cheapestData={this.state.cheapestData} quickestData={this.state.quickestData} dish={this.state.popularData[0]}/>} />
                    <Route  exact path='/home/:popularId' component={DishWidhId}/>
                    <Route  exact path='/cordon' render={() => <DishInfo popular={this.state.popularData[0]}   onclick={this.updateCart} index={this.state.cartProducts} cartItems={this.state.cartItems} />}/>
                    <Route  exact path='/salmon' render={() => <DishInfo popular={this.state.popularData[1]}   onclick={this.updateCart} index={this.state.cartProducts} cartItems={this.state.cartItems} />}/>
                    <Route  exact path='/spaghetti' render={() => <DishInfo popular={this.state.popularData[2]}   onclick={this.updateCart} index={this.state.cartProducts} cartItems={this.state.cartItems} />}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/account' render={() => <Account user={{firstName:this.state.firstName, lastName:this.state.lastName, email: this.state.email, cart:this.state.cartItems}} firstName={this.state.firstName} handleSubmit={this.handleSubmit}/> }/>
                    <Route exact path='/cart' render={() =><Cart removeAll={this.removeAll} cartProducts={this.state.cartProducts} productsData={this.state.productsData} remove={this.removeItem} cartItems={this.state.cartItems}/>}/>
                    <Redirect to='/home'/> 
                </Switch>
                <Footer />
            </div>
         
        )
    }
}
export default Main;