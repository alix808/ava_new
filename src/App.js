import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBanner } from './actions/userActions';

import Header from './comps/header/Header';
import Spinner from './comps/spinner/Spinner';
import HomePage from './pages/home-page/HomePage';
import ContactPage from './pages/contact-page/ContactPage';
import Footer from './comps/footer/Footer';

import './App.css';

function App({ getBanner }) {
  useEffect(() => {
    getBanner();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <Spinner />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/contact' component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default connect(
  null,
  { getBanner }
)(App);
