/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Todo = (props) => {
  const [showEditer, setEditor] = useState(false);
  const [newInput, setInput] = useState('');

  const handelShow = () => {
    console.log(showEditer);
    setEditor(true);
  };

  const handleChange = ({ currentTarget: inputText }) => {
    setInput(inputText.value);
  };

  const {
    todo, onChange, onDelete, onModify,
  } = props;

  const handleModify = () => {
    setEditor(false);
    onModify(newInput, todo.id);
  };

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
      <div className={showEditer ? 'd-flex modify' : 'd-none modify'}>
        <input
          onChange={handleChange}
          type="text"
          value={newInput}
          placeholder="Modify"
        />
        <button onClick={() => handleModify()} type="button" className="submit">
          modify
        </button>
      </div>
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
