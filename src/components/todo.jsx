/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Form from './addItem';

const Todo = (props) => {
  const [showEditer, setEditor] = useState(false);

  const handelShow = () => {
    // const id = parseInt(e.currentTarget.id, 10);
    // const todo = todos.find((task) => task.id === id);
    console.log(showEditer);
    setEditor(true);
  };
  const { todo, onChange, onDelete } = props;
  return (
    <li className={todo.completed ? 'todo-control completed' : 'todo-control'}>
      <input
        onChange={onChange}
        type="checkbox"
        defaultChecked={todo.completed}
        id={todo.id}
      />
      <label
        onDoubleClick={() => handelShow()}
        aria-hidden="true"
        htmlFor={todo.id}
      >
        {todo.title}
      </label>
      {/* <input
        type="text"
        className={showEditer ? 'd-flex' : 'd-none'}
        placeholder="Modify"
      /> */}

      {showEditer ? <Form /> : null}
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
