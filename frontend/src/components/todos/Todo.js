import React from 'react';
import './Todos.css';
import menu from './menu.png';
import checked from './checked.png';
import unchecked from './unchecked.png';

class Todo extends React.Component {

  todo = this.props.todo;

  render() {
    return (
        <div>
          <div className={this.getClasses()}>
            <div className="todoContent">
              <img
                  src={this.getImage()}
                  alt={this.getAltText()}
                  className="todoCheckbox"
              />
              <span className={this.getStrikethrough} id={this.todo.id}>{this.todo.description}</span>
            </div>
            <img className="todoMenu" src={menu} alt="menu" />
          </div>
        </div>
    )
  }

  getImage() {
    if(this.todo.completed)
      return checked;
    else
      return unchecked;
  }

  getAltText() {
    if(this.todo.completed)
      return "Completed";
    else
      return "Not Completed";
  }

  getStrikethrough() {
    if(this.todo.completed) {
      return "strikethrough";
    }
  }

  getClasses() {
    if(!this.props.isLast) {
      return "todoBody separator";
    }
    else return "todoBody";
  }
}

export default Todo;