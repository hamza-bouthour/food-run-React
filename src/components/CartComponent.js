import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
    import { NavLink, Link } from 'react-router-dom';
    import { Breadcrumb, BreadcrumbItem,
         Row, Label, Col } from 'reactstrap';
import MobileListComponent from './MobileListComponent'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class Cart extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            total : 0,
            color: true,
            isModalOpen: false,
            // mobileItems: this.props.cartProducts
        }
    this.toggleModal = this.toggleModal.bind(this);
    this.checkItem = this.checkItem.bind(this);
    }

toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}
checkItem(e) {
    e.target.parentNode.style.background = 'darkgreen'
    e.target.parentNode.style.opacity = '0.5'
    e.target.parentNode.style.color = 'white'
    e.target.disabled = true;
}
render() {
    // let btnColor = this.state.color ? "whity" : "blacky"
    let total = 0
    const renderProducts =  
    this.props.cartProducts.map((pro) => {
        total = total + this.props.productsData[pro].price
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
    const renderProductsModal =  
    this.props.cartProducts.map((pro) => {
        // total = total + this.props.productsData[pro].price
        return (
            <Card key={this.props.productsData[pro].name} className="col-5 mx-auto my-2 p-0">
                <CardImg top width="100%" src={this.props.productsData[pro].img} alt="Card image cap" />
                <CardBody className="p-0 mx-auto">
                    <CardTitle tag="h5" className="m-0">{this.props.productsData[pro].name}</CardTitle>
    
                    <CardText className="m-0"><small>Cost: </small><span className="text-success"><b>{this.props.productsData[pro].price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
                <Button value={this.props.productsData[pro].productId} className="btn btn-success" onClick={this.checkItem}>Check</Button>
            </Card>
        )
        
    })
    
    return (
         
        <div className="container container-fluid addMinHeight">
           <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Cart</BreadcrumbItem>
                    </Breadcrumb>
                    <hr />
                </div>
            </div>
            <div className="row mt-5">
                <h2 className="col-4">Your cart</h2>
                <div className="offset-md-4 offset-2 my-auto">
                    <button onClick={this.props.removeAll} className="cart-buttons"><h5 style={{color: "#1CB5E0"}}>Remove all</h5></button>
                </div>
                <div className="cart-buttons my-auto ml-2">
                    <Link  to='/home' onClick={this.props.removeAll} className="cart-buttons"><h5 style={{color: "#1CB5E0"}}>Home</h5></Link>
                </div>
            
            </div>
            <div>
                <h6 className="col mt-3 mb-1" onClick={this.toggleModal}>
                    Try local shopping display <i class="fas fa-mobile-alt" style={{color: "#1CB5E0"}}></i>
                </h6>
            </div>
            <div className="row mt-3 p-3">
                    <div className="col-md-2 col-6 row">
                        <h6 className="col-4 my-auto">Items:</h6>
                        <h5 className="col-4 my-auto ">{this.props.cartItems}</h5>
                    </div>
                    <div className="col-md-2 col-6 row">
                        <h6 className="col-4 my-auto">Total:</h6>
                        <h5 className="col-4 my-auto">{total.toFixed(2)}</h5>
                    </div>
                 
          
            </div>
            
            <div className="row">
                {renderProducts}
            </div>
            

                {/* <div className="row">
                    <div onClick={this.toggleModal}>
                        List
                    </div>
                </div> */}
                
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} style={{background: "black"}}>
                    <div className="custom-modal container mx-auto">
                        <div className="row">
                            <div onClick={this.toggleModal} className="col-1 offset-11"><i class="far fa-window-close"></i></div>

                        </div>
                        <div className="row mx-auto text-align-center">
                             {renderProductsModal}

                        </div>
                    </div>
                    <div onClick={this.toggleModal} style={{background: "black", color: "white", padding: "5px"}}>Back to cart</div>   
                </Modal>        
            
        </div>
        
    )
}
}

  


export default Cart;
