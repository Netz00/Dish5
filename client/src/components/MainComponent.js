import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { actions } from "react-redux-form";
import { connect } from "react-redux";

import { addComment, fetchDishes } from "../redux/ActionCreators";
import Home from "../pages/HomePage";
import Menu from "../pages/MenuPage";
import Contact from "../pages/ContactPage";
import About from "../pages/ReservationPage";
import Photo from "../pages/PhotogalleryPage";
import Dishdetail from "./DishdetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
    photos: state.photos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          photo={this.props.photos.filter((photo) => photo.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          ErrMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/menu" exact>
            <Menu dishes={this.props.dishes} />
          </Route>
          <Route path="/menu/:dishId">{DishWithId}</Route>
          <Route path="/reserve">
            <About leaders={this.props.leaders} />
          </Route>
          <Route path="/photo">
            <Photo photos={this.props.photos} />
          </Route>
          <Route path="/contactus">
            <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
          </Route>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
