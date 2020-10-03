import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function TreatmentsInfo(props) {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Treatments</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Treatments</h2>
                        <hr /> 
                    </div>
                </div>
                <div className="row">
                    
                </div>
                <div className="row row-content">
                    <h3>Anxiety</h3>
                    <div className="col-sm-6">
                        
                        <p>I am very passionate about supporting those who suffer from anxiety as it is so prevalent in our world. 
                            I offer services to combat anxiety through cognitive behavioral therapy, mindfulness, and person-centered therapy. 
                            Anxiety is so prevalent in this day and age and often times leaves us feeling defeated and exhausted. 
                            I desire to offer hope through skills, techniques, awareness, and most importantly healthy connection and support.
                        </p>
                    </div>
                </div>
                
                <div className="row row-content">
                <h3>Depression</h3>
                    <div className="col-sm-9">
                        <p>I offer services to combat depression through a deeper understanding of self in an effort to discover our 
                            true and unique identities. Depression can feel like a dark and heavy weight that refuses to lift. 
                            I offer a variety of approaches to combating this through several modalities including attachment, cognitive, 
                            and behavioral approaches, yet most importantly, through accompanying you in the hardship. 
                            The dark seems a little brighter when you are no longer sitting alone!

                        </p>
                    </div>
                </div>
                <div className="row">
                        
                </div>
                <div className="row row-content">
                <h3>Relationships/Families</h3>
                    <div className="col-sm-6">
                        
                        <p>I view relationships from an attachment perspective. This perspective claims that the way we relate to 
                            others stems from our earliest and most significant relationships. I like to emphasize that this does 
                            not limit us. No one has control over their earliest relationships, yet we have control over how we relate 
                            as we grow and learn more about ourselves. I believe knowledge is power when it comes to self-awareness on 
                            how we relate to the one's we love and with that power comes opportunity for healing and growth. 
                            I also work with families from a family system's perspective, which operates under  the belief system that the 
                            familly is an emotional unit which interacts as a system. My goal is to help the family members find greater levels 
                            of differentiation and less reactivity within the system. "
                        </p>
                    </div>       
                </div>
                <div className="row">
                    
                </div>
                <div className="row row-content">
                    <h3>Trauma</h3>
                    <div className="col-sm-6">
                        <p>I am passionate about walking along side my clients through the painful memories that often times resurface 
                            and try to control our lives. I understand the complex nature of trauma and what it does to our brains and bodies. 
                            I approach trauma with compassion, respect, and patience. It is a process with no time stamp. I want to honor the 
                            most painful parts of my clients stories by offering a safe space to process."

                        </p>
                    </div>       
                </div>
                <div className="row">
                    
                </div>
                <div className="row row-content">
                    <h3>Adolescent/Child Therapy</h3>
                    <div className="col-sm-6">
                        <p>I have a strong passion and background in working with adolescents. I believe our youth have a voice to be heard 
                            if someone would take the time to listen. I would like to offer my support and listening ear to the youth of this
                            generation. I believe our society is growing more and more complex and effecting our teens on multiple levels 
                            emotionally and mentally. I have had a desire to listen to teens and encourage them in their passions, creativity, 
                            and futures. Each teen is different, so I offer a variety of approaches and services including cognitive behavioral 
                            therapy, DBT skills, art therapy and mindfulness. I also enjoy wokring with children and hearing their unique stories 
                            and perspectives through the practice of non-directive play therapy.
                        </p>
                    </div>        
                </div>
            <div className="row">
                <div className="col">
                    <a role="button" href="/contactus" className="btn btn-lg btn-warning text-white">Book Your Appointment</a>
                </div>
            </div>
            </div>
        );
    }

export default TreatmentsInfo;
