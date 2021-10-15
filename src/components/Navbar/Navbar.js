import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import { Button } from '../Button';
import './Navbar.css';

class NavBar extends Component {
  state = {clicked: false}

  handleClick = () => {
    // whenver you click, change clicked state to opposite
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {/* if it's clicked, change menu icon into X, if it's not then be the bars */}
          {/* in other words, if you click the mobile nav bar then open and set icon to X */}
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {/* loop over each menu item and add the class name from the array */}
          {/* map creates new array */}
          {MenuItems.map((item, index) => {
            return (
              <li>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    )
  }
}

export default NavBar;