/* eslint-disable react/prop-types */
import React from 'react';

const Todo = (props) => {
  const { todo, onChange } = props;
  return (
    <li className="todo">
      <div
        className={todo.completed ? 'todo-control completed' : 'todo-control'}
      >
        <input
          onChange={onChange}
          type="checkbox"
          defaultChecked={todo.completed}
          id={todo.id}
        />
        <label htmlFor={todo.id}>{todo.title}</label>
        <button type="button" className="delele">
          delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
