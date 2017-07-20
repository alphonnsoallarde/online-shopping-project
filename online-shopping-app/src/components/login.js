import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './partials/header';
import Footer from './partials/footer';

class AppLoginPage extends Component {
  render() {
    return (
      <div>
          <Header />
              <div className="login-container">
                  <div className="">
                      <div className="col span-1-of-2 box">
                          <div className="row">
                              <h1 className="login-heading">Welcome</h1>
                              <h3 className="login-subheading">Login to your Account</h3>
                              <i className="ion-ios-person-outline icon-lg"></i>
                              <div className="login-form">
                                  <form action="/login" method="POST">
                                      <div className="form-group">
                                          <input className="form-control" type="text" name="username" placeholder="Your Email" />
                                      </div>
                                      <div className="form-group">
                                          <input className="form-control" type="password" name="password" placeholder="Password" />
                                      </div>
                                      <div className="form-group">
                                          <button className="button button-lg button-color">Login</button>
                                      </div>
                                  </form>
                              </div>
                          </div>
                      </div>
                      <div className="col span-1-of-2 box">
                          <div className="hero-banner">
                              <div className="hero-text-box">
                                  <i className="ion-bag"></i>
                                  <h1>Shop with Us!</h1>
                                  <h3>Still not a User?</h3>
                                  <a href="#" className="button button-lg button-color link-button">Register</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          <Footer />
      </div>
    );
  }
}

export default AppLoginPage;
