import React, { Component } from 'react';
import 'bootstrap';
import Todo from './components/todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: false },
        { id: 4, title: 'todo4', completed: false },
        { id: 5, title: 'todo5', completed: false },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <section>
        <div className="main-container">
          <h1 className="todo-heading">Todos</h1>
          <form className="form">
            <input type="text" placeholder="Add todo..." />
            <button type="submit">Submit</button>
          </form>

          <ul className="todo-list">
            {todos.map((atodo) => (
              <Todo key={atodo.id} todo={atodo} />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
