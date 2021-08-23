import React, { Component } from 'react';
import 'bootstrap';
import Todo from './components/todo';
import Form from './components/addItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'todo1', completed: false },
        { id: 2, title: 'todo2', completed: false },
        { id: 3, title: 'todo3', completed: true },
        { id: 4, title: 'todo4', completed: true },
        { id: 5, title: 'todo5', completed: false },
      ],
      inputs: {
        newTodo: '',
      },
    };
  }

  handelChange = (e) => {
    const { inputs } = this.state;
    const cloneDinputs = { ...inputs };
    cloneDinputs.newTodo = e.currentTarget.value;
    this.setState({ inputs: cloneDinputs });
  };

  render() {
    const { todos, inputs } = this.state;
    return (
      <section>
        <div className="main-container">
          <h1 className="todo-heading">Todos</h1>
          <Form value={inputs} onChange={this.handelChange} />
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
