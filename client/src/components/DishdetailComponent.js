import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardImgOverlay, } from 'reactstrap';
import { Loading } from './LoadingComponent';

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1 mt-4">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                    <CardText>{dish.description}</CardText>
            </Card>
        </div>                   
    );
}

const Dishdetail = (props) => {
    
    if(props.isLoading) {
        return (
        <div className="container">
            <div className="row">
                <Loading />
            </div>
        </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }

    if(props.dish == null)
    {
        return(<div></div>)
    }
    else
    {
    return(
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
            </div>
        </div>             
        )
    }
}

export default Dishdetail;
