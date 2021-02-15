import React, { Component } from 'react';
import Popular from './PopularComponent';
import Cheapest from './CheapestComponent';
import Quickest from "./QuickestComponent";
import DishInfo from './DishInfoComponent';


function Home(props) {
    const popularList = props.popularData.map(popular => {
        return (
            <Popular popular={popular} onClick={props.onClick}/>
        )
    })
    const cheapestList = props.cheapestData.map(cheap => {
        return (
            <Cheapest cheapest={cheap} />
        )
    })
    const quickestList = props.quickestData.map(quick => {
        return (
            <Quickest quickest={quick} />
        )
    })
    
        return (
            <div>         
                <div className="container container-contour mb-5">
                    <div className="mt-4 mb-4">
                        <h1>Welcome {props.userName}!</h1>
                    </div>
                    <h2>Most popular</h2>
                    <div className="row mt-3 mb-5 p-3">
                        {popularList}
                    </div>
                    <h2>Cheapest</h2>
                    <div className="row mt-3 mb-5">
                        {cheapestList}
                    </div>
                    <h2>Quickest</h2>
                    <div className="row mt-3 mb-5">
                        {quickestList}
                    </div>         
                </div>
            </div>
         
        )
}

    
        
            
    




export default Home