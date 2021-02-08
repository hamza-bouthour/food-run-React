import React, { Component } from 'react';
import Popular from './PopularComponent'

function Home(props) {
    const popularList = props.popularData.map(popular => {
        console.log(popular)
        return (
            <Popular popular={popular}/>
        )
    })
    
        return (
            <div className="container">
                <h2>Most popular</h2>
                <div className="row">
                    {popularList}
                </div>
            </div>
        )
}

    
        
            
    




export default Home