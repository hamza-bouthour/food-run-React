import React, { Component } from 'react';
import Home from './HomeComponent';
import Cart from './CartComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishInfo from './DishInfoComponent';
import Account from './AccountComponent';
import MobileListComponent from './MobileListComponent'
import { POPULARDATA } from '../shared/popularData';
import { CHEAPESTDATA } from '../shared/cheapestData';
import { QUICKESTDATA } from '../shared/quickestData';
import { PRODUCTSDATA } from '../shared/productsData'
import { Button } from 'bootstrap';
import { connect } from 'react-redux';
import { addProduct } from '../redux/ActionCreators';
import { removeProduct } from '../redux/ActionCreators';
import { addAccount } from '../redux/ActionCreators';
import { removeAllProducts } from '../redux/ActionCreators'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        popularData: state.popularData,
        cheapestData: state.cheapestData,
        quickestData: state.quickestData,
        productsData: state.productsData,
        cartItems: state.cartItems,
        cartProducts: state.cartProducts,
        buttonCheckedStyle: state.buttonCheckedStyle,
        account: state.account

    }
}
const mapDispatchToProps = {
    
    addProduct: (product) => (addProduct(product)),
    removeProduct: (event, product) => (removeProduct(event, product)),
    addAccount: (firstName, lastName, email, password) => (addAccount(firstName, lastName, email, password)),
    removeAllProducts: (product) => (removeAllProducts(product))
    
}
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // popularData: POPULARDATA,
            // cheapestData: CHEAPESTDATA,
            // quickestData: QUICKESTDATA,
            // productsData: PRODUCTSDATA,
            // cartItems: 0,
            // cartProducts: [],
            // pickedDish: 0,
            // total : 0,
            // button: {
            //     enabled: true,
            //     text: 'add'
            // },
            // firstName: '',
            // lastName: '',
            // phoneNum: '',
            // email: '',

        }

        this.removeItem = this.removeItem.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addPro = this.addPro.bind(this)

    }
    handleSubmit(values) {
        // console.log(event)
        // for (const [key, value] of Object.entries(event)) {
            
        //         this.setState({
        //          [key]: value
        //      });
            //  console.log(this.state.key)
        console.log(values)
        this.props.addAccount(values.firstName, values.lastName, values.email, values.passowrd)
    // }   
    } 

     addPro(e) {
        e.preventDefault();
        e.target.parentNode.style.background = 'darkgreen' 
        e.target.disabled = true; 
         e.target.parentNode.style.color = 'white'
        console.log(e.target)
        this.props.addProduct(e.target.value)
        console.log(this.props.cartProducts)
    }

    
    removeAll() {
   this.props.removeAllProducts(0)
   console.log('remove')
    }
    removeItem(event) {
    //   const asba = this.state.cartProducts
    //   for (let i=0; i<asba.length; i++) {
    //       if (asba[i] === event.target.value) {
    //           console.log(asba.splice(i, 1))
    //           console.log(asba)
    //           this.setState({
    //             cartProducts: asba,
    //             cartItems: this.state.cartItems - 1
    //         })
    //       }
    //   }
    this.props.removeProduct(event, this.props.cartProducts)
    }
    render() {
        const DishWidhId =({match}) => {
            return ( 
                <div>
                    <DishInfo popular={this.props.popularData.filter(popular => popular.id === +match.params.popularId)[0]}
                                onclick={this.addPro}
                                // index={this.props.cartProducts}
                                cartItems={this.props.cartItems}     
                    />
                 </div>
            )
        }
        return (
            
            <div>
                <Header cartItems={this.props.cartItems} userName={this.props.account.firstName}/>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path='/home' render={() =><Home userName={this.props.firstName} onClick={this.updateDish} popularData={this.props.popularData} cheapestData={this.props.cheapestData} quickestData={this.props.quickestData} dish={this.props.popularData[0]}/>} />
                                <Route  exact path='/home/:popularId' component={DishWidhId}/>
                                <Route  exact path='/cordon' render={() => <DishInfo popular={this.props.popularData[4]}   onclick={this.addPro} index={this.state.cartProducts} cartItems={this.props.cartItems} />}/>
                                <Route  exact path='/salmon' render={() => <DishInfo popular={this.props.popularData[5]}   onclick={this.addPro} index={this.state.cartProducts} cartItems={this.props.cartItems} />}/>
                                <Route  exact path='/spaghetti' render={() => <DishInfo popular={this.props.popularData[6]}   onclick={this.addPro} index={this.state.cartProducts} cartItems={this.props.cartItems} />}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/account' render={() => <Account user={{firstName:this.props.account.firstName, lastName:this.props.account.lastName, email: this.props.account.email, cart:this.props.cartItems}}  handleSubmit={this.handleSubmit}/> }/>
                                <Route exact path='/cart' render={() =><Cart removeAll={this.removeAll} cartProducts={this.props.cartProducts} productsData={this.props.productsData} remove={this.removeItem} cartItems={this.props.cartItems}/>}/>
                                {/* <Route exact path='/list' render={() =><MobileListComponent cartProducts={this.state.cartProducts} productsData={this.props.productsData}  cartItems={this.state.cartItems}/>}/> */}
                                <Redirect to='/home'/> 
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
            </div>
         
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));