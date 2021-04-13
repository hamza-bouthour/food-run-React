import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="site-footer text-white">
            <div className="container">
                <div className="row py-5">             
                    <div className="col-4 my-auto col-md-6">
                        <ul className="list-unstyled list-group list-group-horizontal">
                            <li className="mr-2 mr-md-5 text-white"><Link to='/home' className="text-white">Home</Link></li>
                            <li className="mr-2 mr-md-5"><Link to='/cart' className="text-white">Cart</Link></li>
                            <li className="mr-2 mr-md-5"><Link to='/contact' className="text-white">Contact</Link></li> 
                        </ul>
                    </div>
                    <div className="col-md-4 offset-2 col-6 offset-md-2">
                        <div className="">
                            <a className="btn btn-social-icon btn-instagram mr-2" href="http://instagram.com/" target="_blank"><i className="fab fa-github"></i></a>
                            <a className="btn btn-social-icon btn-linkedin mr-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-facebook mr-2" href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-instagram"  href="http://instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>   
                </div>
            </div>
        </footer>
    );
}

export default Footer;