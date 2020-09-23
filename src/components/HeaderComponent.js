import React, { Component }from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { TREATMENTS } from '../shared/treatments';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-4 col-sm-3 col-md-2 align-self-center">
                                <img src="/assets/images/sara1.jpg" height="150" width="150" alt="SJC Logo"/>
                            </div>
                            <div className="col">
                                <h1>Sara Joyce Counseling</h1>
                                <p>Sara J. Ratliff, MA, LPC, NCC
                                    sararatliffcounseling@gmail.com 
                                    (913) 704-9915
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-4 mt-4">
                                <a role="button" className="btn btn-lg btn-warning" href="#">Book Your Appointment</a>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/approach">My Approach</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;