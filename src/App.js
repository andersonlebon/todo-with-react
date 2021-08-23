import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [{ id: 1, title: 'todo1', completed: false }],
    };
  }

  render() {
    const { todo } = this.state;
    console.log(todo);
    return <div>{todo[0].title}</div>;
  }
}

export default App;
