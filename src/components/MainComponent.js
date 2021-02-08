import React, { Component } from 'react';
import Home from './Home';
import Contact from './Contact';
import Cart from './Cart';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './HeaderComponent';
import { POPULARDATA } from '../shared/popularData'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularData: POPULARDATA
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' render={() =><Home popularData={this.state.popularData} />} />
                    <Route path='/contact' component={Contact}/>
                    <Route path='/cart' component={Cart}/>
                    <Redirect to='/home'/> 
                </Switch>
            </div>
         
        )
    }
}
export default Main;