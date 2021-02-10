import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state ={

        }
    }
    render() {
        return (
            <div className="p-1">
                <div className="container mb-5 p-md-0 p-2 " style={{border: "solid 1px black",borderRadius: "7px"}}>
                    <div className="row">
                        <img className="col-12 col-md-6" src="https://i.postimg.cc/yN8yymc0/profile-photo3.png" style={{width: "10px"}}/>
                        <div className="row col-12 col-md-6 p-5 contact-description">
                            <div className="col-12">
                                <h2>Hello world1!</h2>
                                <p>I am Hamza, I am a full stack web developer and a compassionate musician.</p>
                                <span>bouthour.h@gmail.com</span>
                                <p>209-321-0491</p>
                            </div>
                            <div className="col-12 mx-auto row">
                                <div className="mx-auto">
                                    <a className="btn btn-social-icon btn-instagram mr-2" href="http://instagram.com/" target="_blank"><i className="fab fa-github"></i></a>
                                    <a className="btn btn-social-icon btn-linkedin mr-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                                    <a className="btn btn-social-icon btn-facebook mr-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                                    <a className="btn btn-social-icon btn-instagram"  href="http://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                </div>
        )
    }
}
{/* <i classname="fa fa-linkedin" */}
{/* <i className="fa fa-facebook" */}

export default Contact;