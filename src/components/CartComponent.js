import React, { Component } from 'react';
import PopularComponent from './PopularComponent'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';


class Cart extends Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }
  

    render() {
        const zeb = this.props.productsData
        const nam = this.props.cartProducts
        function Asba() {
         for(let i=0; i<zeb.length; i++) {
             let j =0
                while(j<nam.length) {
                    if(zeb[i].productId === nam[j]) {
                        
                        console.log('ezzab')
                        console.log(zeb[i].productId)
                        console.log(nam[j])
                        
                        return (
                            <div>
                                <Card key={zeb[i].name} className="col-md-3 col-4 p-1">
                            <CardImg top width="100%" src={zeb[i].img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">{zeb[i].name}</CardTitle>
                                {/* <CardText><small>Cooking: </small><span className="text-success"><b>{props.popular.time}</b><i className="far fa-clock"></i></span></CardText> */}
                                <CardText><small>Cost: </small><span className="text-success"><b>{zeb[i].price}</b><i className="fas fa-dollar-sign"></i></span></CardText>
                            </CardBody>
                                {/* <Button value={pro.id} className="btn btn-success" onClick={props.onclick}>Add</Button> */}
                                </Card>
                            </div>
                            
                        )    
                         
                    }
                   
                }         
         }
         return <div />
        }
        // const popular = this.props.popular
        // const proIndex = this.props.index

        console.log(this.props.cartProducts)
        // console.log(this.props.index)
        return (
            
            <div>
            <Asba />
                {/* <Card key={this.props.popular.id} className="col-md-5 col-12 card-popular mx-md-4 my-md-3"> */}
                {/* <Link to={`/home/${props.popular.id}`}> */}
                {/* <CardImg top width="100%" src={this.props.popular.productsId[this.props.index].img} alt="Card image cap" /> */}
                {/* </Link> */}
                <CardBody>
                    {/* <CardTitle tag="h5">{this.props.popular.productsId[0].name}</CardTitle> */}
                    {/* <CardText><small>Cooking: </small><span className="text-success"><b>{this.props.popular.productsId[this.props.index]}</b><i className="far fa-clock"></i></span></CardText>{' '} */}
                    {/* <CardText><small>Cost: </small><span className="text-success"><b>{this.props.popular.productsId[this.props.index].price}</b><i className="fas fa-dollar-sign"></i></span></CardText> */}
                </CardBody>
                
            {/* </Card> */}
            </div>
        )
    }
}

// function Cart(props){
//     const products = props.productsData;
//     const productsIds = props.cartProducts;
//     const haha = products.map(function(pro) {
//         if (productsIds.filter(x => x === pro.productId)) {
//             return (
//                 <div>{pro.name}</div>
//             )
//         } return <div />
       
           
      
        
         
//     })
//         productsIds.filter(function(id) {
//             products.map(pro => {
                
//                 id === pro.productId
                    
//                 })
//             })
//       console.log(haha)      
//     return <div /> 
    
// }
export default Cart;