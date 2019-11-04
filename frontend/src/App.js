import React, {useState} from 'react';
import Header from './components/header/Header.js';
import Todos from './components/todos/Todos';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        description: "First Todo",
        completed: true
      },
      {
        id: 2,
        description: "Second Todo",
        completed: false
      },
      {
        id: 3,
        description: "Third Todo",
        completed: false
      }
   ]);
  return (
      <div className="App">
        <Header/>
        <div className="body">
          <Todos todos={todos}/>
        </div>
      </div>
  );
}

