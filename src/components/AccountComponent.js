import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Label, Col, Table } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { NavLink, Link } from 'react-router-dom';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Account extends Component {
    constructor(props) {
        super(props);


    }



    render() {
        if (this.props.firstName.length === 0) {

            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Account</BreadcrumbItem>
                        </Breadcrumb>
                        <hr />
                    </div>
                </div>
            
    
                <div className="container">
                    <LocalForm name="Account form" onSubmit={values => this.props.handleSubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".firstName" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, 
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".firstName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".lastName" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minLength: minLength(2),
                                                maxLength: maxLength(15)
                                            }}
                                        />
                                        <Errors
                                            className="text-danger"
                                            model=".lastName"
                                            show="touched"
                                            component="div"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be at least 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" md={2}>Email</Label>
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
                                    <Label htmlFor="password" md={2}>Passowrd</Label>
                                    <Col md={10}>
                                        <Control.text model=".password" id="password" name="password"
                                            className="form-control"
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
                                    <Col className="col-3 col-md-1 offset-md-2" >
                                    {/* <Link to='/home'> */}
                                        <Button type="submit" color="primary" disabled={false}>
                                            Submit
                                        </Button>
                                    {/* </Link> */}
                                    {/* {renderButton} */}
                                    </Col>                           
                                    <Col md={{size: 2}} sm={2} className="col-2 col-md-2">
                                    <Link to='/home'>
                                        <Button type="submit" color="primary" disabled={false}>
                                            Home
                                        </Button>
                                    </Link>
                                    {/* {renderButton} */}
                                    </Col>                           
                                </Row>
                            </LocalForm>
                </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                <div className="row custom-breadcrumbs">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Account</BreadcrumbItem>
                        </Breadcrumb>

                    </div>
                </div>
                <div className="row">
                    <Table>
                        <tbody>
                            <tr>
                                <th>First name</th>
                                <td>{this.props.user.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last name</th>
                                <td>{this.props.user.lastName}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{this.props.user.email}</td>
                            </tr>
                            <tr>
                                <th>Cart</th>
                                <td>{this.props.user.cart}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                </div>
            )
        }
    }
}
export default Account;