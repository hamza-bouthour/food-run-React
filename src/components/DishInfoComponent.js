import React from 'react';
import { Card, CardImg, CardText, CardBody,Breadcrumb, BreadcrumbItem, CardTitle, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Youtube from './YoutubeComponent'
import Loading  from './LoadingComponent';
import ReactPlayer from 'react-player';
import {  addProductToCart, addProductToTotal, removeProductFromCart } from '../redux/ActionCreators'



const mapDispatchToProps = {
    addProductToCart,
    addProductToTotal,
    removeProductFromCart
};
const mapStateToProps = (populars, products, cart) => {
    return {
        populars,
        products,
        cart
    };
};
// orange: #E78200
// blue: #039FB6
// darkblue: #3b4e76
const RenderProduct = (props) => {
    const {add, remove, productInCart, product} = props
    return (
        <div>
            <Card key={product.name}  style={{border: productInCart ? 'solid 2px #E78200' : 'solid 1px gray', borderRadius: 5, padding: 5,marginTop: 10}}>
                <CardImg right width="100%" src={product.img} alt="Card image cap" style={{width: '100%', height: 140, opacity: productInCart ? 0.6: 1}}/>
                <CardBody  className="m-0 p-2" style={{opacity: productInCart ? 0.6: 1}}>
                    <CardTitle tag="p" className="m-0">{product.name}</CardTitle>
                    <CardText className="m-0 p-1"><span className="text-success"><b style={{color: '#3b4e76'}}>{product.price}</b><i className="fas fa-dollar-sign" style={{color: 'green'}}></i></span></CardText>
                </CardBody>
                <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', backgroundColor: '#fff',paddingTop: 5,}}>
                    <Button 
                        disabled={productInCart? true : false}
                        style={{background: 'none', border: 'none'}}
                        onClick={add}
                    >
                        <i className="fas fa-1x fa-pen-alt" 
                            
                            style={{color: '#039FB6'}}
                        />
                    </Button>
                    <Button
                        disabled={productInCart? false : true}
                        style={{background: 'none', border: 'none'}}
                        onClick={remove}
                    >
                        <i 
                            className="fas fa-1x fa-minus-square" 
                            style={{color: productInCart ? 'red': '#3b4e76'}}
                        />
                    </Button>
                    <Button
                        disabled={productInCart? false : true}
                        style={{background: 'none', border: 'none'}}
                        onClick={remove}
                        className="offset-2"
                    >
                        <i 
                            className="far fa-1x fa-star" 
                            style={{color: 'pink'}}
                        />
                    </Button>
                </div>    
            </Card>
        </div>   
    ) 
}

 const RenderDirections = (props) => {
    if (props.isLoading) {
        return <Loading />
    }
    return (
        props.directions.map(dir => {
            return (
                <div style={{color: '#3b4e76'}}>
                    <h6>{dir}</h6>
                </div>
            )
        })
    )
}

 const RenderDish = (props) => {
    const {popular} = props;

    return (
        <div className="row mt-4 p-0">
            <img className="col-md-6 col-12" src={popular.img} alt="Card image cap" />
            <div className="col-md-6 col-12 row mx-auto p-0">
                <div className="col-12 ">
                    <h1>{popular.name}</h1>
                    <div>
                        <small>Cooking: </small><span className="text-success"><b>{popular.time}</b><i className="far fa-clock mr-md-4"></i></span>{' '}
                        <small>Cost: </small><span className="text-success"><b>{popular.cost}</b><i className="fas fa-dollar-sign"></i></span>
                    </div>
                </div>
                <div className="col-12 mt-3 mx-0">
                    <h6 style={{color: '#3b4e76'}}>{popular.description}</h6>
                    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', marginTop: 30}}>
                        <Button className="dish-buttons">Add to list</Button>
                        <Button className="dish-buttons">Add to favorite</Button>
                        <Button className="dish-buttons">Full recipe</Button>
                    </div>
                </div>         
            </div>
        </div>
    )
}

function DishInfo(props) {
    const {popular} = props;
    const list = props.populars.products.products.filter(product => product.dishId.includes(popular.id))
    const cart = props.populars.cart.products
    const directions = props.popular.directions

const productAdd = (id
    ) => {
    props.addProductToCart(id)
    props.addProductToTotal(props.populars.products.products.filter(x=> x.productId === id)[0].price)
}
const productRemove = (id) => {
    props.removeProductFromCart(id, props.populars.products.products.filter(x=> x.productId === id)[0].price )
   
}  
    return (  
        <div className="container">
            <div className="row">
                <div className="col" >
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home"><img src="https://i.postimg.cc/9fyPp0H1/aaaaa.png" style={{width: "30px"}}></img></Link></BreadcrumbItem>
                        <BreadcrumbItem active>{popular.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <hr />
                </div>
            </div>
            <div className="row">
                <RenderDish 
                    popular={popular} 
                    isLoading={props.populars.products.isLoading}   
                />
                <hr />
            </div> 
            <div className="row">
                <div className="col-6 row">
                    <div className="col-12" style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
                        <h4 >Items</h4> 
                        <Link to="/cart" className="link-to-cart">
                            <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}}>   
                                <i className="fas fa-2x fa-clipboard-list " style={{color: '#3b4e76'}}></i>
                                <h6 className="my-auto ml-1" >{cart.length}</h6>
                                <i className="fas fa-2x fa-wallet my-auto ml-4" style={{color: '#3b4e76'}}></i>
                                <h6 className="my-auto ml-1" >{props.populars.cart.total}<i className="fas  fa-dollar-sign" style={{color: '#E78200'}}></i></h6>
                            </div>
                        </Link> 
                    </div>
                    {list.map((product, i) => {
                        return (
                            <div className="col-4">
                                    <RenderProduct 
                                    productInCart={props.populars.cart.products.includes(product.productId)} 
                                    isLoading={props.populars.products.isLoading}
                                    add={() => productAdd(product.productId)}
                                    remove={() => productRemove(product.productId)}
                                    product={product}
                                />
                            </div>
                        )
                    })} 
                </div>
                <div className="col-6">
                        <h2>Directions</h2>
                        <ReactPlayer className="mw-100" url={popular.video} />
                    <div className=" mt-2">
                        <RenderDirections 
                            directions={directions} 
                            isLoading={props.populars.products.isLoading} 
                        />
                    </div>
                </div>
            </div>
        </div>              
    )    
}

export default connect(mapStateToProps, mapDispatchToProps)(DishInfo);
