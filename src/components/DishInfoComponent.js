import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import Cart from './CartComponent'
import { NavLink, Link } from 'react-router-dom';

function DishInfo(props) { 
    

   
    
    if (props.popular) {
        // <Cart popular= {props.popular} />
        const dishProduct = 
            props.popular.productsId.map((pro, i) => {
                // console.log(pro)
                return (
                    <>
                        <Card key={pro.name} className="col-md-3 card-popular col-4 p-1 my-md-3">
                            <CardImg top width="100%" src={pro.img} alt="Card image cap" />
                            <CardBody  className="p-0 p-2">
                                <CardTitle tag="h5" className="m-0">{pro.name}</CardTitle>
                                {/* <CardText><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText> */}
                                <CardText className="m-0"><small>Cost: </small><span className="text-success"><b>{pro.price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                            </CardBody>
                                <Button value={pro.id} className="btn" style={{background: "lightseagreen"}} onClick={props.onclick}>Add</Button>
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
            <div key={props.popular.id} className="container mt-4">
                <div className="row">
                    <img className="col-md-6 col-12" src={props.popular.img} alt="Card image cap" />
                    <div className="col-md-6 col-12 row">
                        <div className="col-12">
                            <h1>{props.popular.name}</h1>
                            <div>
                                <small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock mr-md-4"></i></span>{' '}
                                <small>Cost: </small><span className="text-success"><b>{props.popular.cost}</b><i className="fas fa-dollar-sign"></i></span>
                            </div>
                        </div>

                        <div className="row col-12 mt-3">
                            <h4 className="col-12">An easy Chicken Cordon Bleu which is quick to prepare, and baked rather than fried. All the flavour, all the crunch, a beautiful golden crumb, and it’s better for you!</h4>
                            <div className="row mt-1 p-3">
                                <div className="col-4">
                                    <Link to='/cordon' style={{color: "#1CB5E0"}}>Cordon bleu</Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/salmon' style={{color: "#1CB5E0"}}>Baked salmon</Link>
                                </div>
                                <div className="col-4">
                                    <Link to='/spaghetti' style={{color: "#1CB5E0"}}>Spaghetti Carbonara</Link>
                                </div>
                            </div>
                            <Link to="/cart" className="mt-3 col-12">
                                <div className="row col-4 p-2 ml-1">   
                                    <img src="https://i.postimg.cc/qRsTwppM/shopping-bag.gif" style={{width: '50px'}} className="mx-0"></img>
                                    <h4 style={{color: "green"}} className="my-auto col-4 mx-0">{props.cartItems}</h4>
                                </div>
                            </Link> 
                        </div>
                            
                        
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="containter col-md-6 p-4">
                        <div className="row">
                            <h2>What you need</h2>
                        </div>
                        <div className="row">
                            {dishProduct}
                        </div>
                    </div>
                    <div className="containter col-md-6 p-4">
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