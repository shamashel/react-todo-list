import React from 'react';
import './Header.css';
import logo from './todo-logo.png'

class Header extends React.Component {
  state;

  constructor(props) {
    super(props);
    this.state = {active: this.active};
  }


  render() {
    return (
        <div className="header">
          <div className="header-title">
            <img src={logo} className="header-logo" alt="Logo"/>
            <h1>todoer</h1>
          </div>
          <div className="header-content">
            {this.elements.map(element => {
              return (
                  <a href="#1"
                     id={element}
                     key={element}
                     className = {this.isActive(element)}
                     onClick = {() => {this.setActive(element)}}
                  >
                    {element}
                  </a>
              )
            })}
          </div>
        </div>
    )
  }
  isActive(element) {
    if(this.state.active === element) {
      return "active";
    }
    else {
      return "";
    }
  }

  setActive(element) {
    this.setState({active: element})
  }

  elements = [
    "home",
    "todos",
    "settings"
  ]

  active = "todos";

}

export default Header;