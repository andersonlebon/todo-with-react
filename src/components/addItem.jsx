/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <form
      onSubmit={onSubmit}
      className="form d-flex align-items-center justify-content-between"
    >
      <input
        onChange={onChange}
        type="text"
        value={value.newTodo}
        placeholder="Add todo..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
