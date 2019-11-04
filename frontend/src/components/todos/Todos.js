import React, {useState} from 'react';
import './Todos.css';
import add from './add_icon.PNG';
import Todo from './Todo.js';

export default function Todos({todos}){
  const [items, setItems] = useState(todos);
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
              items.map((todo, i, {length}) => {
                return (
                    <Todo key={todo.id} todo={todo} isLast={i === length - 1} />
                );
              })
            }
          </div>
        </div>
    )
}