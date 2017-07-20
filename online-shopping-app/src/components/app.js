import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './partials/header';
import Footer from './partials/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <div>
            <h1>Home Page</h1>
            <h2>This is the landing page!</h2>
            <ul>
              <li><a href="/login">Login Page</a></li>
            </ul>
          </div>
        <Footer />
      </div>
    );
  }
}
