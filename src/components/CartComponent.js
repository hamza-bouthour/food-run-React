import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Cart extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            product : []
        }
    this.renderProduct = this.renderProduct.bind(this)    
    this.zeb = this.zeb.bind(this)    
    }
renderProduct() {
    const zeb = this.props.productsData
    const nam = this.props.cartProducts
    
    
     for(let i=0; i<nam.length; i++) {
            zeb.map(function(x) {
                if (nam[i] === x.productId) {
                    
                    this.setState(prevState => ({
                        product: x,  ...prevState.product
                    }))
                    
                }
                return <div />
            })
          
        } 
        return <div />  
}
zeb() {
    this.state.product.map(pro => {
        return (
            <div>
            <h5>{pro.name}</h5>
            </div>
         
        )
    })
}
    render() {
        
            return this.zeb
        
    }
}


export default Cart;