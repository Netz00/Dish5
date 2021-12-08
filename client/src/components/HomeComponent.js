import React from 'react';
import { render } from 'react-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, CardSubtitle, Jumbotron } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderCard({item, isLoading, errMess}) {

    if(isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
        return(
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText> 
                </CardBody>
            </Card>
        );
    }
}

function Naslovna() {
    return(
        <>
        <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Restoran dish5</h1>
                                <p> Neki super motivirajući marketinski tekst o dugogodisnjem iskustvu i kulinarskom umijecu. Rezervirajte danas!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
        </>
    );  
}


function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                                isLoading={props.dishesLoading} 
                                errMess={props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default Naslovna