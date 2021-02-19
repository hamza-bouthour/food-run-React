import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { POPULARDATA } from '../shared/popularData';
function Popular(props) { 
    return (  
        <div className="col-6 col-md-3 my-3 mx-auto">
        <Link to={`/home/${props.popular.id}`} style={{textDecoration: "none"}}>        
            {/* <Card name={POPULARDATA.indexOf(props.popular)} className="col-md-3 col-12 card-popular p-1" onClick={props.onClick}>
                <Link to={`/home/${props.popular.id}`}>
                <CardImg  width="50%" src={props.popular.img} alt="Card image cap"/>
                </Link>
                <CardBody className=" p-2">
                    <CardTitle tag="h5" className="m-0">{props.popular.name}</CardTitle>
                    <CardText className="m-0"><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText>
                    <CardText className="m-0"><small>Cost: </small><span className="text-success"><b>{props.popular.cost}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
           
            </Card> */}
            <div key={props.popular.name} className="card card-popular" onClick={props.onClick}>
                <img className="card-img-top" src={props.popular.img} alt="Card image cap"/>
                <div className="card-body p-2 text-dark">
                    <h5 className="text-dark m-0">{props.popular.name}</h5>
                    <p className="m-0"><small>Cooking: </small><span className="card-text"><b>{props.popular.time}</b><i className="fas fa-stopwatch"></i></span></p>
                    <p className="m-0"><small>Cost: </small><span className="card-text"><b>{props.popular.cost}</b><i className="fas  fa-dollar-sign"></i></span></p>
                   
                </div>
            </div>
            </Link>  
        </div> 
    )    
}
export default Popular;
