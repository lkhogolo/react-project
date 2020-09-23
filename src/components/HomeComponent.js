import React from 'react';
import {Card, CardBody } from 'reactstrap';

function Home (props){
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card className="bg-light mt-3">
                        <CardBody>
                            <blockquote className="blockquote">
                                <img className="card-img-top" src="/assets/images/sunset1.jpg" height="150" width="100%" alt="Sunset Image"/>
                                <p className="mb-0">"People are just as wonderful as sunsets if you let them be. When I look at a sunset, 
                                I don't find myself saying, 'Soften the orange a bit on the right hand corner.' I watch in awe as it unfolds."
                                </p>
                                <footer className="blockquote-footer">Carl Rogers{' '}</footer>                                
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <img src="/assets/images/sara3.jpg" alt="SJC image"className="d-flex img-thumbnail"/>
                </div>
                <div className="col">
                    <p>
                        Welcome to my site! I'm glad you found yourself here! My name is Sara and I'm a provisionally licensed professional 
                        counselor in the state of Kansas. I'm under the supervision of Amy E. Cain, MA, LPC, NCC. Reach out if you would like 
                        to connect more!
                    </p>
                    '\n \n'
                    <p>Have you been feeling drained, overwhelmed, or perhaps even hopeless? Everything appears distorted in the 
                        dark spaces and sometimes that makes it challenging to recognize the light. I hope to accompany you in providing a 
                        safe space where you do not have to stumble through the dark spaces alone and can find your
                        way back to a place of light, where you can discover hope and healing. </p>
                        '\n'<p>Reaching out is the first step...</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <a role="button" className="btn btn-lg btn-warning text-white">Book Your Appointment</a> 
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-sm-8">
                    <h3>What to Expect in Session</h3>
                    <p> 
                        My first priority is to provide a space where you feel comfortable. 
                        I realize it will take time to build a trusting relationship between us. 
                        Building trust between two people who are diving into some of life's most 
                        sensitive struggles, doesn't happen automatically. Any relationship takes 
                        time and patience in growing and maintaining trust and connection. I want 
                        to share a few aspects of my personal style to perhaps ease your mind coming 
                        in or help you get a better idea of who I am. '\n\n'I welcome and encourage my clients 
                        to embrace their true personalities in session because I will be doing the same.
                        Embracing your true self looks different for everyone and for me that might look 
                        like being able to be honest in my quirkiness which is a trait  gladly welcome in 
                        my therapy room. Being genuine is a huge factor in building a healthy connection. 
                        I operate from a relational/person-centered approach to therapy, which means no one 
                        should be afraid to be themselves in my sessions. There is a time for laughter and 
                        there is a time for tears. Both can serve as healthy factors in healing 
                        and I want you to be able to experience both with you in our journey. 
                    </p>
                </div>
                <div className="col col-sm-4">
                    <img src="/assets/images/office1.jpg" alt="SJC Office"className="d-flex img-thumbnail"/>
                </div>                   
            </div>
        </div>
    );
}
export default Home;