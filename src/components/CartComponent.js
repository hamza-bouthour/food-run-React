import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';


class Cart extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            total : 0,
            color: true
        }
    this.changecolor = this.changecolor.bind(this)
    }

changecolor(e) {
    this.setState({
        color: !this.state.color
    })
}
render() {
    let btnColor = this.state.color ? "whity" : "blacky"
    let total = 0
    const renderProducts =  
    this.props.cartProducts.map((pro) => {
        total = total + this.props.productsData[pro].price
        return (
            <Card key={this.props.productsData[pro].name} className={btnColor} onClick={this.changecolor}>
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
                <h2 className="col-4">Your cart</h2>
                <div className="offset-md-4 offset-2 my-auto">
                    <button onClick={this.props.removeAll} className="cart-buttons"><h5>Remove all</h5></button>
                </div>
                <div className="cart-buttons my-auto ml-2">
                    <button onClick={this.props.removeAll} className="cart-buttons"><h5>Home</h5></button>
                </div>
            
            </div>
            <div className="row mt-3">
                    <div className="col-md-2 col-4 row">
                        <h6 className="col-4 my-auto">Items:</h6>
                        <h5 className="col-4 my-auto ">{this.props.cartItems}</h5>
                    </div>
                    <div className="col-md-2 col-4 row">
                        <h6 className="col-4 my-auto">Total:</h6>
                        <h5 className="col-4 my-auto">{total.toFixed(2)}</h5>
                    </div>
                    {/* <div className="col-4 col-md-2 cart-buttons my-auto p-0">
                        <button onClick={this.props.removeAll} className="cart-buttons"><h5>Remove all</h5></button>
                    </div> */}
               
                    
            </div>
            
            <div className="row">
                {renderProducts}
            </div>
        </div>
        
    )
}
}
  


export default Cart;