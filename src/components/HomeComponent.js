import React, { useEffect } from 'react';
import Popular from './PopularComponent';
import Loading  from './LoadingComponent';
import { connect } from 'react-redux';
import { fetchPopulars, fetchProducts } from '../redux/ActionCreators';


const mapDispatchToProps = {
    fetchPopulars,
    fetchProducts
};
const mapStateToProps = (populars, account) => {
    return {
        populars,
        account
    };
};
function Home(props) {

    useEffect(() => {
        props.fetchPopulars()
        return () => {props.fetchProducts()}
    }, [])

    if (props.populars.populars.isLoading) {
        return <Loading />;
    }
    if (props.populars.populars.errMess) {
        return (
            <div>
                <p>{props.populars.errMess}</p>
            </div>
        );
    }   
    return (
        <div>         
            <div className="container  mb-5 mt-4">
                <div className="mt-4 mb-4 d-md-none ">
                    <h1>Welcome {props.userName}!</h1>
                </div>
                <div className="mb-5">
                    <h5>Welcome to Food-Run</h5>
                    <h6>Get your weekly grocery list from your favorite meals!</h6>
                </div>
                <h5>Most popular</h5>
                <div className="row mt-3 mb-5 p-2 mx-auto ">
                    {props.populars.populars.populars.map(popular => {
                        return (
                            <Popular popular={popular}/>
                        )
                    })}
                </div>      
            </div>
        </div>
        
    )
     
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);