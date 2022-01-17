import React from 'react';
import { Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteMeal } from '../actions/meals';

function RenderDish({ dish }) {
  const user = JSON.parse(localStorage.getItem('profile'));

  const loggedIn = user?.result?.username;
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-5 m-1 mt-4">
      <Card>
        <CardTitle className="mt-2">{dish.name}</CardTitle>
        <CardImg
          width="100%"
          src={`/assets/images/${dish.name
            .replace(/\s/g, '')
            .toLowerCase()}.png`}
          alt={dish.name}
        />
        <CardText>{dish.description}</CardText>
        <CardTitle className="mt-1">{dish.price} Kn</CardTitle>
      </Card>
      {loggedIn && (
        <Button
          color="light"
          className="mt-1"
          onClick={() => dispatch(deleteMeal(dish.id))}
        >
          <DeleteIcon fontSize="small" /> &nbsp; Obriši jelo
        </Button>
      )}
    </div>
  );
}

const Dishdetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }

  if (props.dish == null) {
    return <div></div>;
  } else {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
        </div>
      </div>
    );
  }
};

export default Dishdetail;
