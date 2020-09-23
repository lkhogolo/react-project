import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { TREATMENTS } from '../shared/treatments';
import TreatmentsInfo from './TreatmentsComponent';
import Approach from './ApproachComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            treatments: TREATMENTS
        };
    }

    render() { 

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/aboutus' component={About}/>
                    <Route exact path='/approach' component={Approach}/>
                    <Route exact path='/treatments' component={TreatmentsInfo}/>
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                    
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;