import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Popular(props) { 
   const {popular} = props
    return (  
        <div className="col-6 col-md-12 my-3 mx-auto" >
        <Link to={`/home/${popular.id}`} style={{textDecoration: "none"}}>        
            <div key={popular.name} className="media popular-media" onClick={props.onClick} style={{borderRadius: 5}}>
                <img className="mr-3" style={{witdh: 350, height: 350, borderRadius: 5}} src={popular.img} alt="Card image cap"/>
                <div className="media-body p-2">
                    <h5 className="text-dark m-0">{popular.name}</h5>
                    <p className="mt-3" style={{color: '#3b4e76'}}>{popular.description}</p>
                    <div style={{display: 'flex', justifyContent: 'flex-start', flexDirection: 'row'}} >
                        <p className="mr-2" style={{color: '#3b4e76'}}><small>Cooking: </small><span className="card-text"><b style={{color: '#039FB6'}}>{popular.time}</b><i className="fas fa-stopwatch" style={{color: '#E78200'}}></i></span></p>
                        <p className="m-0" style={{color: '#3b4e76'}}><small>Cost: </small><span className="card-text" ><b style={{color: '#039FB6'}}>{popular.cost}</b><i className="fas  fa-dollar-sign" style={{color: '#E78200'}}></i></span></p>        
                    </div>
                </div>
            </div>
            </Link>  
        </div> 
    )    
}
export default Popular;
// <div key={popular.name} className="card card-popular" onClick={props.onClick}>
//                 <img className="card-img-left" src={popular.img} alt="Card image cap"/>
//                 <div className="card-body p-2 text-dark">
//                     <h5 className="text-dark m-0">{popular.name}</h5>
//                     <p className="m-0"><small>Cooking: </small><span className="card-text"><b>{popular.time}</b><i className="fas fa-stopwatch"></i></span></p>
//                     <p className="m-0"><small>Cost: </small><span className="card-text"><b>{popular.cost}</b><i className="fas  fa-dollar-sign"></i></span></p>        
//                 </div>
//             </div>