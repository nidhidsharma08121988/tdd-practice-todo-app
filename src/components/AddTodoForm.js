import React, { useState } from 'react';

const AddTodoForm = ({ addNewTask }) => {
  const [todo, setTodo] = useState('');
  const [checked, setChecked] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    const newtask = {
      title: todo,
      completed: checked,
    };
    addNewTask(newtask);
  };
  return (
    <div>
      <h3>Add To do</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          id='to-do-text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
          data-testid='input-todo'
        />
        <input
          type='checkbox'
          id='completed'
          onChange={e => setChecked(e.target.checked)}
        />{' '}
        Completed
        <button type='submit' id='submit-btn'>
          Add to do
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
