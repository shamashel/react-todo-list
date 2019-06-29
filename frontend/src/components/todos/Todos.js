import React from 'react';
import './Todos.css';
import add from './add_icon.PNG';
import Todo from './Todo.js';

class Todos extends React.Component {

  render() {
    return (
        <div className="todosContainer">
          <div className="todosHeader">
            <h2>My Todos</h2>
            <img src={add}
                 alt="Add Todo"
                 onClick={() => {console.log(this.props.todos)}}/>
          </div>
          <div className="todosBody">
            {
              this.props.todos.map((todo, i, {length}) => {
                return (
                    <Todo key={todo.id} todo={todo} isLast={i === length - 1} />
                );
              })
            }
          </div>
        </div>
    )
  }
}

export default Todos;