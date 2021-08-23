/* eslint-disable react/prop-types */
import React from 'react';

const Todo = (props) => {
  const { todo, onChange, onDelete } = props;
  return (
    <li className={todo.completed ? 'todo-control completed' : 'todo-control'}>
      <input
        onChange={onChange}
        type="checkbox"
        defaultChecked={todo.completed}
        id={todo.id}
      />
      <label htmlFor={todo.id}>{todo.title}</label>
      <button
        onClick={() => onDelete(todo.id)}
        type="button"
        className="delele ml-auto"
      >
        delete
      </button>
    </li>
  );
};

export default Todo;
