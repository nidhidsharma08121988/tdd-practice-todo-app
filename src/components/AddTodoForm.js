import React from 'react';

const AddTodoForm = () => {
  const handleSubmit = e => {
    e.preventdefault();
  };
  return (
    <div>
      <h3>Add To do</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' id='to-do-text' data-testid='input-todo' />
        <input type='checkbox' id='completed' /> Completed
      </form>
    </div>
  );
};

export default AddTodoForm;
