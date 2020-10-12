import React, { Component } from "react";
import secLogo from "../../img/logo2.png";

class Navbar extends Component {
  render() {
    return (
      <header id="header">
        <div class="container d-flex align-items-center">
          <a href="#index.html" class="logo mr-auto">
            <img src={secLogo} alt="secondary-logo" />
          </a>

          <nav class="nav-menu d-none d-lg-block">
            <ul>
              <li class="active">
                <a href="#about">| About Us |</a>
              </li>
              <li>
                <a href="#welcome">| Home |</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
