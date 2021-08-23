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
    return (
      <section>
        <div className="main-container">
          <h1 className="todo">Todos</h1>
          <form className="form">
            <input type="text" placeholder="Add todo..." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    );
  }
}

export default App;
