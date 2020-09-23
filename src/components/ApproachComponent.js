import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Approach(props) {
    return(
    <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>My Approach</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>My Approach</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <p>'\n'I believe we are all unique creatures with unique stories and we find ourselves in need of different 
                        things in different stages of our journey. Therefore one approach to therapy will not fit everyone. I approach 
                        counseling eclectically, because mankind is a puzzle and I will work with you until I’m able to find the right 
                        piece that is the right fit for you during the stage of life you are in. '\n\n' My overarching approach to counseling 
                        is person-centered, as I believe humans have the capacity to function as healthy and whole creatures if placed in 
                        the right environments with the proper tools. I view humans and development from an attachment perspective, 
                        with the belief that our earliest and most significant relationships impact us the most, however these relationships 
                        do not limit us. My belief is that through knowledge and understanding of the impact of early relationships on 
                        current relationships, comes healing and generational change! 
                    </p>
                </div>
                <div className="col-sm-6">
                    <img src="/assets/images/office1.jpg" className="d-flex img-thumbnail"/>
                </div>        
            </div>
            <div className="row row-content">
                <p>
                    When working specifically with my teens and children, 
                    I incorporate cognitive behavioral therapy skills as it is crucial to have practical tools to combat the day to day 
                    anxieties our children face in this fast-paced and everchanging society. Cognitive behavioral therapy is helpful for all 
                    ages and can be incorporated with adults as well. I also integrate mindfulness practices and skills into all my therapy modalities.
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <a role="button" className="btn btn-lg btn-warning text-white" href="#">Book Your Appointment</a>'\n\n'
                </div>
            </div>
        </div>
    );
    }
    export default Approach;