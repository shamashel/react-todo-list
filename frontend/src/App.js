import React from 'react';
import Header from './components/header/Header.js';
import Todos from './components/todos/Todos';
import './App.css';

export class App extends React.Component {
  state = {
    todos : [
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
   ]
  };
  render () {
    return (
        <div className="App">
          <Header/>
          <div className="body">
            <Todos todos={this.state.todos}/>
          </div>
        </div>
    );
  }
}

export default App;
