import React, {useState} from 'react';
import './Todos.css';
import menu from './menu.png';
import checked from './checked.png';
import unchecked from './unchecked.png';

export default function Todo({todo, isLast}){

  const [ item, setItem ] = useState(todo);

  function handleClick(e) {
    e.preventDefault();
    setItem({
      ...item,
      completed: !item.completed
    });
  }

  function getImage() {
    if(item.completed)
      return checked;
    else
      return unchecked;
  }

  function getAltText() {
    if(item.completed)
      return "Completed";
    else
      return "Not Completed";
  }

  function getStrikethrough() {
    if(item.completed) {
      return "strikethrough";
    }
  }

  function getClasses() {
    if(isLast) {
      return "todoBody separator";
    }
    else return "todoBody";
  }

    return (
        <div>
          <div className={getClasses()}>
            <div className="todoContent">
              <img
                  src={getImage()}
                  alt={getAltText()}
                  onClick={handleClick}
                  className="todoCheckbox"
              />
              <span className={getStrikethrough()} id={item.id}>{item.description}</span>
            </div>
            <img className="todoMenu" src={menu} alt="menu" />
          </div>
        </div>
    )
}