import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function Popular(props) { 
    return (           
        <>
            <Card key={props.popular.id} className="col-md-3 col-12">
                <CardImg top width="100%" src="https://i.postimg.cc/7P74yMjm/jumbotron-image3.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.popular.name}</CardTitle>
                    <CardText><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText>
                    <CardText><small>Cost: </small><span className="text-success"><b>{props.popular.cost}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
            </Card>
        </>   
    )    
}
export default Popular;
