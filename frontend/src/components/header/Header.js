import React, {useState} from 'react';
import './Header.css';
import logo from './todo-logo.png'

export default function Header() {

  const [active, setActive] = useState("todos");
  const elements = [
    "home",
    "todos",
    "settings"
  ];

  return (
      <div className="header">
        <div className="header-title">
          <img src={logo} className="header-logo" alt="Logo"/>
          <h1>todoer</h1>
        </div>
        <div className="header-content">
          {elements.map(element => {
            return (
                <a href="#1"
                    id={element}
                    key={element}
                    className = {isActive(element)}
                    onClick = {() => {setActive(element)}}
                >
                  {element}
                </a>
            )
          })}
        </div>
      </div>
  )
  
  function isActive(element) {
    if(active === element) {
      return "active";
    }
    else {
      return "";
    }
  }

}