import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
    

export default class MobileListComponent extends Component {
    render() {
        let renderProducts = "";
        if (this.props.cartProducts.length > 0) {

             renderProducts =  
            this.props.cartProducts.map((pro) => {
            // total = total + this.props.productsData[pro].price
            return (
                <Card key={this.props.productsData[pro].name} className="col-4 col-md-2 mt-3 p-1 card-popular my-md-3">
                    <CardImg top width="100%" src={this.props.productsData[pro].img} alt="Card image cap" />
                    <CardBody className="p-0 p-2">
                        <CardTitle tag="h5" className="m-0">{this.props.productsData[pro].name}</CardTitle>
        
                        <CardText className="m-0"><small>Cost: </small><span className="text-success"><b>{this.props.productsData[pro].price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                    </CardBody>
                    <Button value={this.props.productsData[pro].productId} className="btn" onClick={this.props.remove} style={{background: "slategrey"}}>Remove</Button>
                </Card>
            )
            
        })
        } else {
            renderProducts = <h1 style={{marginBottom: "150px"}}>Your list is empty</h1>
        }
        return (
            <div className="p-1 list-container">
                <div className="container">
                    <div className="row">
                    {renderProducts}      
                    </div>
                </div>
                
            </div>
        )
    }
}
