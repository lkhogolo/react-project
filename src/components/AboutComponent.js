import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Me</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-4">
                    <img src="/assets/images/sara2.jpg" alt="SJC images" className="d-flex img-thumbnail"/>
                </div>
                <div className="col-sm-6">
                    <h3>About Me</h3>
                    <p> I believe human connection is the catalyst for healthy emotional well-being and life change. 
                        I am a therapist yes, but first and foremost, I am a human, just like you! With that being said, 
                        connecting with you is my top priority and comes before any therapy modality, skill, or tool. Through 
                        healthy connection comes healing.</p>
                    <p>My desire to help others came from a long history of struggling with my own social anxiety, fears, and insecurities.
                        These were painful years yet through my struggles, my eyes were opened to the pain of those around me.
                        The more I connected with people, and the more I listened to their stories, a desire grew in my heart to make
                        it my life mission to journey with the ones who felt lonely, empty, and hopeless.</p>
                    <p>This passion has led me to meet many extraordinary people. Youth have always held a special place in my heart 
                        and I have a passion to be a listening ear and advocate for this demographic of people, as I believe our youth 
                        are creative and compassionate humans who need our support in these chaotic times more than ever. Yet my passion
                        is not limited to adolescents, as I enjoy working with a variety of ages and stages in life, and I believe we all 
                        have an inner child that desires to be heard and understood.</p>
                    
                </div>
            </div>
            <div className="row">
                <p>Have you ever felt like you were the only one going through the pain you experienced, and your loneliness isolated 
                    you from reaching out to others? I want to be a voice of comfort to those who find themselves in lonely spaces, 
                    assuring you, that you are not alone on this journey. That longing you feel is an engrained desire for wholeness 
                    through understanding of yourself and others. If you connect with my words or want to learn more, I encourage you
                    to take the next step in connecting with me!</p>
                <p>Click on the button below to book your appointment!</p>
            </div>
            <div className="row" >
                <div className="col">
                    <a role="button" href="/contactus" className="btn btn-lg btn-warning text-white">Book Your Appointment</a>
                </div>
            </div>
        </div>
    );
}

export default About;