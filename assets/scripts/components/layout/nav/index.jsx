import React, { Component } from 'react';

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand">
          Lyft Node Starter
        </a>
        {/* <ul className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              Home
            </a>
          </li>
        </ul> */}
      </nav>
    );
  }
}
