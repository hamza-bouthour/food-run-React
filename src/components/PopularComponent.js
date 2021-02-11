import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { POPULARDATA } from '../shared/popularData';
function Popular(props) { 
    return (           
        <>
            <Card name={POPULARDATA.indexOf(props.popular)} className="col-md-5 col-12 card-popular mx-md-4 my-md-3 p-1" onClick={props.onClick}>
                <Link to={`/home/${props.popular.id}`}>
                <CardImg top width="100%" src={props.popular.img} alt="Card image cap" />
                </Link>
                <CardBody>
                    <CardTitle tag="h5">{props.popular.name}</CardTitle>
                    <CardText><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText>{' '}
                    <CardText><small>Cost: </small><span className="text-success"><b>{props.popular.cost}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
                {/* <Button value={} onClick={props.onClick}>aaaa</Button> */}
            </Card>
        </>   
    )    
}
export default Popular;
