import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Label, Col } from 'reactstrap';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="jumbotron-1 p-0" style={{margin: "0"}}>
                    <div className="container">
                        <div className="row mb-5">
                            
                                {/* <Link to='/account' className="col-3 p-0">
                                    <button class="btn" data-target="#signupModal" data-toggle="modal" style={{fontSize: "13px"}}>Sign-up</button>
                                </Link> */}
                          
                            
                                <button  onClick={this.toggleModal} class="btn-signin btn text-white col-3 offset-9 col-md-1 offset-md-11" data-target="#signinModal" data-toggle="modal" style={{fontSize: "13px"}}><i className="far fa-user fa-1"></i> Sign-in</button>
                
                          
                            <div>
                                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                    <ModalBody> 

                                        <LocalForm>
                                            <Row className="form-group">
                                                {/* <Label htmlFor="email" md={6}>Email</Label> */}
                                                <Col md={10}>
                                                    <Control.text model=".email" id="email" name="email"
                                                        placeholder="Email"
                                                        className="form-control"
                                                        validators={{
                                                            required,
                                                            validEmail
                                                        }}
                                                    />
                                                    <Errors
                                                        className="text-danger"
                                                        model=".email"
                                                        show="touched"
                                                        component="div"
                                                        messages={{
                                                            required: 'Required',
                                                            validEmail: 'Invalid email address'
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                            {/* <Label htmlFor="password" md={6}>Passowrd</Label> */}
                                                <Col md={10}>
                                                <Control.text model=".password" id="password" name="password"
                                                className="form-control"
                                                placeholder="password"
                                                // validators={{
                                                //     required,
                                                //     validEmail
                                                // }}
                                                />
                                                <Errors
                                                    className="text-danger"
                                                    model=".passowrd"
                                                    show="touched"
                                                    component="div"
                                                    messages={{
                                                        required: 'Required',
                                                        validEmail: 'Invalid email address'
                                                    }}
                                                />
                                                </Col>
                                            </Row>
                                            <Row className="form-group">
                                                <Col className="col-3 col-md-2" >
                                                    <Button type="submit" color="success" disabled={false}>
                                                        Submit
                                                    </Button>
                                                </Col>                           
                                                <Col md={{size: 2}} sm={2} className="col-2 col-md-2">
                                                    <Link to='/home'>
                                                        <Button type="submit" color="primary" disabled={false} onClick={this.toggleModal}>
                                                            Home
                                                        </Button>
                                                    </Link>
                                                </Col>                           
                                            </Row>
                                        </LocalForm>
                                    </ModalBody>    
                                </Modal>        
                            </div>
                        </div>
                        <Link to='/home'>
                            <div class="row mx-auto mt-5">
                                <Link to='/home' class="col-2 col-md-1 offset-2 offset-md-4"><i class="fa-custom fa fa-3x fa-shopping-cart"></i></Link>
                                <h3 class="col-md-4 col-6 text-white my-auto">Food Run</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="container">
                        <form className="row justify-content-center mt-5">
                            <input className="col-8 form-control no-border-right" type="text" id="searchInput"  placeholder="Look up products for"/>           
                            <button  className="col-2 col-md-1 form-control no-border-left" type="submit"><i className="fa fa-search"></i></button>                  
                        </form>
                    
                    </div>
                    <div className="container mt-5">
                            <Navbar dark expand="md" className="mt-3 ml-0">
                            
                                <NavbarToggler onClick={this.toggleNav} className="custom-navbar-toggler" style={{marginLeft: "-15px"}}/>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar className=" navbar-dark">
                                        <NavItem className="mr-2">
                                        <Link to="/home">
                                        <NavLink className="nav-link" to="/home">
                                                 Home
                                            </NavLink>
                                        </Link>
                                            
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="/cart">
                                                 Cart
                                                 <span>({this.props.cartItems})</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <Link to="/account">
                                                <NavLink className="nav-link" to="/account">
                                                    Account
                                                </NavLink>
                                            </Link>
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="/contact">
                                                 Contact 
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="mr-2 offset-10 text-white my-auto d-none d-md-block col-4">
                                            
                                                 Welcome{' '}{this.props.userName}! 
                                       
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                        </Navbar>
                    </div>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;