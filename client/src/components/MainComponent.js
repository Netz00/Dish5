import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { connect } from 'react-redux';

import Home from '../pages/HomePage';
import Menu from '../pages/MenuPage';
import Contact from '../pages/ContactPage';
import About from '../pages/ReservationPage';
import Photo from '../pages/PhotogalleryPage';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
    photos: state.photos,
    menus: state.menus,
  };
};

const mapDispatchToProps = (dispatch) => ({
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
});

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menu" exact>
            <Redirect to="/menu/1" />
          </Route>
          <Route path="/menu/:menu_id">
            <Menu />
          </Route>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
