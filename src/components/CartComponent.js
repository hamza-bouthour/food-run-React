import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';


class Cart extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            total : 0
        }
    }


render() {

    let total = 0
    const renderProducts =  
    this.props.cartProducts.map((pro) => {
        total = total + this.props.productsData[pro].price
        return (
            <Card key={this.props.productsData[pro].name} className="col-6 col-md-2 p-1 mr-md-2 mt-1">
                <CardImg top width="100%" src={this.props.productsData[pro].img} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{this.props.productsData[pro].name}</CardTitle>
    
                    <CardText><small>Cost: </small><span className="text-success"><b>{this.props.productsData[pro].price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
                <Button value={this.props.productsData[pro].productId} className="btn btn-danger" onClick={this.props.remove}>Remove</Button>
            </Card>
        )
    })
    return (
        <div className="container container-fluid">
            <div className="row">
                <h2>Your cart</h2>
            </div>
            <div className="row mt-3">
                    <div className="col-md-3 col-6 row">
                        <h3 className="col-4">Items</h3>
                        <h2 className="col-4">{this.props.cartItems}</h2>
                    </div>
                    <div className="col-md-3 col-6 row">
                        <h3 className="col-4">total</h3>
                        <h2 className="col-4">{total.toFixed(2)}</h2>
                    </div>
                <Button onClick={this.props.removeAll} className="col-4 col-md-2">Remove all</Button>
            </div>
            
            <div className="row">
                {renderProducts}
            </div>
        </div>
        
    )
}
}
  


export default Cart;