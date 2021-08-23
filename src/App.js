import React, { Component } from 'react';
import 'bootstrap';
import Todo from './components/todo';
import Form from './components/addItem';

let todoId = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
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

  handleSubmit = (e) => {
    e.preventDefault();
    const state = { ...this.state };
    const todos = [...state.todos];
    todos.push({
      // eslint-disable-next-line no-plusplus
      id: ++todoId,
      title: state.inputs.newTodo,
      completed: false,
    });
    this.setState({ todos });
  };

  handelCompleteTask = (e) => {
    const currentIt = e.currentTarget.id;
    const state = { ...this.state };
    // eslint-disable-next-line eqeqeq
    const task = state.todos.filter((todo) => todo.id == currentIt)[0];
    task.completed = !task.completed;
    this.setState(state);
  };

  handleDelete = (id) => {
    const state = { ...this.state };
    // eslint-disable-next-line eqeqeq
    const todos = state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  };

  render() {
    const { todos, inputs } = this.state;
    return (
      <section>
        <div className="main-container">
          <h1 className="todo-heading">Todos</h1>
          <Form
            value={inputs}
            onChange={this.handelChange}
            onSubmit={this.handleSubmit}
          />
          <ul className="todo-list">
            {todos.map((atodo) => (
              <Todo
                key={atodo.id}
                onChange={this.handelCompleteTask}
                todo={atodo}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default App;
