import React, { Component } from 'react';
import Home from './HomeComponent';
import Cart from './CartComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import  DishInfo  from './DishInfoComponent';
import Account from './AccountComponent';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = (populars, account) => {
    return {
        populars,
        account
    };
};
const mapDispatchToProps = {
  
}
class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const DishWidhId =({match}) => {
            const popular = this.props.populars.populars.populars.filter(
                popular => popular.id === +match.params.popularId)[0]
            return ( 
                <div>
                    <DishInfo 
                        popular={popular}   
                    />
                 </div>
            )
        }
        return ( 
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition  classNames="page" timeout={300}>
                            <Switch>
                                <Route exact path='/home' component={Home} />
                                <Route exact path='/asba' component={DishInfo} />
                                <Route  exact path='/home/:popularId' component={DishWidhId}/>
                                <Route path='/contact' component={Contact}/>
                                <Route path='/account' component={Account}/>
                                <Route exact path='/cart' component={Cart}/>
                                <Redirect to='/home'/> 
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer />
  
            </div>
        )
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
// <Route  exact path='/home/:popularId' component={DishWidhId}/>