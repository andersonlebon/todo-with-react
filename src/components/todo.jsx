import React from 'react';

const Todo = (props) => {
  const { todo } = props;
  return (
    <li className="todo">
      <div className="todo-control">
        <input type="checkbox" id="check-b" />
        <label htmlFor="check-b">{todo.title}</label>
        <button type="button" className="delele">
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
