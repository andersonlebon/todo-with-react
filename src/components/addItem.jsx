/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => {
  const { value, onChange } = props;
  return (
    <form className="form">
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
