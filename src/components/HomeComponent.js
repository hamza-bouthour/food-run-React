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
            <div className="container">
                <h2>Most popular</h2>
                <div className="row mt-3 mb-5">
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
        )
}

    
        
            
    




export default Home