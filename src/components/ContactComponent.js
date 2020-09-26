import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col,FormFeedback } from 'reactstrap';
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
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }
        const validEmail =/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
        if (this.state.touched.email && !validEmail.test(email)) {
            errors.email = 'Invalid Email. Please check and re-enter your email address';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
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
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);  
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
                            services, please fill out the form below or give me a call on '('913')' 704-9915. {'\n'}
                            I am committed to your privacy.<span className="warn"> Do not include confidential or private information
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
                                            invalid={errors.firstName}
                                            onBlur={this.handleBlur("firstName")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" md={2}>Last Name</Label>
                                    <Col md={10}>
                                        <Input type="text" id="lastName" name="lastName"
                                            placeholder="Last Name"
                                            value={this.state.lastName}
                                            invalid={errors.lastName}
                                            onBlur={this.handleBlur("lastName")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="phoneNum" md={2}>Phone</Label>
                                    <Col md={10}>
                                        <Input type="tel" id="phoneNum" name="phoneNum"
                                            placeholder="Phone number"
                                            value={this.state.phoneNum}
                                            invalid={errors.phoneNum}
                                            onBlur={this.handleBlur("phoneNum")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.phoneNum}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" md={2}>Email</Label>
                                    <Col md={10}>
                                        <Input type="email" id="email" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            invalid={errors.email}
                                            onBlur={this.handleBlur("email")}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.email}</FormFeedback>
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
                                <Label htmlFor="serviceType" md={2}>Type of Sevice</Label>
                                    <Col md={10}>
                                        <Input type="select" name="serviceType"
                                                value={this.state.serviceType}
                                                onChange={this.handleInputChange}>
                                            <option selected>Select...</option>
                                            <option value="freePhone">Free Phone Consulation</option>
                                            <option value="appointment">Set up an appointment</option>
                                            <option value="feedback">Feedback</option>
                                            <option value="other">Other</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="feedback" md={2}>Your Message</Label>
                                    <Col md={10}>
                                        <Input type="textarea" id="feedback" name="feedback"
                                            rows="12"
                                            value={this.state.feedback}
                                            onChange={this.handleInputChange}></Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={{size: 10, offset: 2}}>
                                        <Button type="submit" className="btn btn-lg btn-warning text-white">
                                            Submit
                                        </Button>
                                        <span className ="text-muted warntxt">
                                            (By clicking submit you agree that the phone number and/or email you provided may be used to 
                                            contact you)
                                        </span>
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