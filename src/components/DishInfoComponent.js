import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import Cart from './CartComponent'

function DishInfo(props) { 
    

   
    
    if (props.popular) {
        // <Cart popular= {props.popular} />
        const dishProduct = 
            props.popular.productsId.map((pro, i) => {
                // console.log(pro)
                return (
                    <>
                        <Card key={pro.name} className="col-md-3 col-4 p-0">
                            <CardImg top width="100%" src={pro.img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{pro.name}</CardTitle>
                                {/* <CardText><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText> */}
                                <CardText><small>Cost: </small><span className="text-success"><b>{pro.price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                            </CardBody>
                                <Button value={pro.id} className="btn btn-success" onClick={props.onclick}>Add</Button>
                        </Card>
                    </>   
                )
            })
           
        const dishDirections = props.popular.directions.map(dir => {
            return (
                <h6 className="p-3">{dir}</h6>
            )
        })
        
        return (           
            <div key={props.popular.id} className="container">
                <div className="row">
                    <img className="col-md-6 col-12" src={props.popular.img} alt="Card image cap" />
                    <div className="col-md-6 col-12">
                        <h1>{props.popular.name}</h1>
                        <div>
                            <small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock mr-md-4"></i></span>{' '}
                            <small>Cost: </small><span className="text-success"><b>{props.popular.cost}</b><i className="fas fa-dollar-sign"></i></span>
                        </div>
                        <hr />
                        <div className="row">
                            <h4 className="col-12">An easy Chicken Cordon Bleu which is quick to prepare, and baked rather than fried. All the flavour, all the crunch, a beautiful golden crumb, and it’s better for you!</h4>
                            <div className="mt-3 col-12 row">
                            <h6 className="my-auto col-1">Cart:</h6>
                             <h5 style={{color: "green"}} className="my-auto col-4">{props.cartItems}</h5>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="containter col-md-6">
                        <div className="row">
                            <h2>What you need</h2>
                        </div>
                        <div className="row">
                            {dishProduct}
                        </div>
                    </div>
                    <div className="containter col-md-6">
                        <div className="row">
                            <h2>Directions</h2>
                        </div>
                        <div className="row p-4">
                            {dishDirections}
                            
                        </div>
                    </div>
                        

                </div>
            </div>   
        )    
    }
    console.log('nope')
}
export default DishInfo;