import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
 import { NavLink } from 'react-router-dom';//

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="jumbotron p-0">
                    <div className="container">
                        <div className="row">
                            <div class="signin-button mr-2 mt-2">
                                <button class="btn text-white btn-signin" data-target="#signinModal" data-toggle="modal"><strong>Sign-in</strong></button>
                                <button class="btn btn-signup" data-target="#signupModal" data-toggle="modal"><strong>Sign-up</strong></button>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-5">
                            <a href="index.html" class="col-2 col-md-1"><i class="fa-custom fa fa-4x fa-shopping-cart"></i></a>
                            <h1 class="col-md-4 col-9 text-white my-auto">Food Run</h1>
                        </div>
                    </div>
                    <div className="container">
                        <form className="row justify-content-center mt-5">
                            <input className="col-8 form-control no-border-right" type="text" id="searchInput"  placeholder="Look up products for"/>           
                            <button  className="col-2 col-md-1 form-control no-border-left" type="submit"><i className="fa fa-search"></i></button>                  
                        </form>
                
                    </div>
                    <div className="container mt-5">
                            <Navbar dark expand="md" className="add-margin-top">
                            
                                <NavbarToggler onClick={this.toggleNav} className="custom-navbar-toggler" />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar className=" navbar-dark">
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="home">
                                                 Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="cart">
                                                 Cart
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="https://github.com/hamza-bouthour/react-nucamp/blob/main/src/components/MainComponent.js">
                                                 Repos
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className="mr-2">
                                            <NavLink className="nav-link" to="contact">
                                                 Contact Us
                                            </NavLink>
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