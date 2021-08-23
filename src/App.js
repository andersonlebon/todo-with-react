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
        edite: '',
      },
    };
  }

  handelChange = (e) => {
    const { inputs } = this.state;
    const cloneDinputs = { ...inputs };
    cloneDinputs[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ inputs: cloneDinputs });
  };

  // handelModidfy = ({ currentTarget: input }) => {
  //    const { inputs } = this.state;
  //    const cloneDinputs = { ...inputs };
  //    cloneDinputs.newTodo = e.currentTarget.value;
  //    this.setState({ inputs: cloneDinputs });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const state = { ...this.state };
    const todos = [...state.todos];
    todoId += 1;
    todos.push({
      id: todoId,
      title: state.inputs.newTodo,
      completed: false,
    });
    this.setState({ todos });
  };

  handelCompleteTask = (e) => {
    const currentIt = parseInt(e.currentTarget.id, 10);
    const state = { ...this.state };
    const task = state.todos.filter((todo) => todo.id === currentIt)[0];
    task.completed = !task.completed;
    this.setState(state);
  };

  handleDelete = (id) => {
    const state = { ...this.state };
    const todos = state.todos.filter((todo) => todo.id !== parseInt(id, 10));
    this.setState({ todos });
  };

  handleModify = (inputText, id) => {
    // const id = parseInt(e.currentTarget.id, 10);
    const state = { ...this.state };
    const todos = [state.todos];
    const todo = todos.find((task) => task.id === id);
    console.log(todo);
  };

  render() {
    const { todos, inputs } = this.state;
    return (
      <section className="container d-flex flex-column align-items-center">
        <div className="main-container">
          <h1 className="todo-heading">Todos</h1>
          <Form
            value={inputs.newTodo}
            onChange={this.handelChange}
            onSubmit={this.handleSubmit}
            name="newTodo"
          />
          <ul className="todo-list">
            {todos.map((atodo) => (
              <Todo
                onModify={this.handleModify}
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
