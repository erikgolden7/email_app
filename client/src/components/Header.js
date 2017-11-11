import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="/" class="left brand-logo">
            Email-app
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="sass.html">Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
