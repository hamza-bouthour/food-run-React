import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function quickest(props) { 
    return (           
        <>
            <Card key={props.quickest.id} className="col-md-5 col-12 card-popular mx-md-4 my-md-3">
                <CardImg top width="100%" src="https://i.postimg.cc/7P74yMjm/jumbotron-image3.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{props.quickest.name}</CardTitle>
                    <CardText><small>Cooking: </small><span className="text-success"><b>{props.quickest.time}</b><i className="far fa-clock"></i></span></CardText>
                    <CardText><small>Cost: </small><span className="text-success"><b>{props.quickest.cost}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                </CardBody>
            </Card>
        </>   
    )    
}
export default quickest;