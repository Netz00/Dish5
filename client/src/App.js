import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Home from './pages/HomePage';
import Menu from './pages/MenuPage';
import Contact from './pages/ContactPage';
import About from './pages/ReservationPage';
import Photo from './pages/PhotogalleryPage';
import Groceries from './pages/GroceriesPage';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const loggedIn = user?.result?.username;

  return (
    <BrowserRouter>
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
          <About />
        </Route>
        <Route path="/photo">
          <Photo />
        </Route>
        <Route path="/contactus">
          <Contact />
        </Route>
        {loggedIn && (
          <Route path="/groceries">
            <Groceries />
          </Route>
        )}
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
