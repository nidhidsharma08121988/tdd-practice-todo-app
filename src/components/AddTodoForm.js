import React from 'react';

const AddTodoForm = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <h3>Add To do</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' data-testid='input-todo' />
      </form>
    </div>
  );
};

export default AddTodoForm;
