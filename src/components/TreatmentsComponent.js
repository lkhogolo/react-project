import React from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderTreatment({treatment}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={treatment.image} alt={treatment.name} />
                <CardBody>
                    <CardText>{treatment.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );  
}

function TreatmentsInfo(props) {
    if (props.treatment) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem active>{props.treatment.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.treatment.name}</h2>
                        <hr /> 
                    </div>
                </div>
                <div className="row">
                    <RenderTreatment treatment={props.treatment} />
                </div>
            </div>
        );
    }
    return <div />;
}

export default TreatmentsInfo;
