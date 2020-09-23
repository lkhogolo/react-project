import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Contact Us</h2>
                        <hr />
                    </div>
                </div>
                <div className="row row-content items-align-center">
                    <div className="col-sm-12">
                        <img className="imgs" src="/assets/images/office2.jpg" alt="..."/>
                    </div>
                </div>
                <div className="row">          
                    <div className="col">
                        <p>
                            To book an appointment or to obtain additional information about my Counseling
                            services, please fill out the form below or give me a call on '('913')' 704-9915. '\n'
                            I am committed to your privacy.<span> Do not include confidential or private information
                            regarding your health condition in this form.</span>
                        </p>     
                    </div>
                </div>
                <div className="row row-content">
                        <div className="col-md-9">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="firstName" md={2}>First Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="firstName" name="firstName"
                                            placeholder="First Name"
                                            value={this.state.firstName}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            onChange={this.handleInputChange} />
                                    </Col>                        
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 4, offset: 2}}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox"
                                                    name="agree"
                                                    checked={this.state.agree}
                                                    onChange={this.handleInputChange} /> {' '}
                                                <strong>May we contact you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Input type="select" name="contactType"
                                                value={this.state.contactType}
                                                onChange={this.handleInputChange}>
                                            <option>By Phone</option>
                                            <option>By Email</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={this.state.feedback}
                                            onChange={this.handleInputChange}></Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fa fa-map-marker fa-2x"></i>
                                <p>Shawnee, KS 66203, USA</p>
                            </li>    
                            <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                <p> (913) 704-9915</p>
                            </li>    
                            <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                <p>sararatliffcounseling@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                </div> 
                
            </div>
            
        
        );
    }
}

export default Contact;