import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className= "list-unstyled">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/aboutus">About</a></li>
                        <li><a href="/approach">My Approach</a></li>
                        <li><a href="treatments">Treatments</a></li>
                        <li><a href="contactus">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className ="col-sm-4 text-center">
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>                   
                </div>
                <div className="col-sm-4 d-sm-block d-none text-left" >
                    <h5>Contact info:</h5>
                    <a role="button" className="btn btn-link" href="tel:+19137049915"><i className="fa fa-phone"></i> (913) 704-9915</a><br />
                    <a role="button" className="btn btn-link" href="mailto:sararatliffcounseling@gmail.com"><i className="fa fa-envelope-o"></i> sararatliffcounseling@gmail.com</a>
                    <ul className= "list-unstyled">
                        <li> Office Hours:</li>
                        <li> Mon, Wed and Fri: 8am-6pm</li>
                        <li> Tue and Thu: 8am-4pm</li>
                        <li> Sat: By Appointment</li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;