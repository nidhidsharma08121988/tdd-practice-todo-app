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
    setTodo('');
    setChecked(false);
  };
  return (
    <div className='form-container'>
      <h3>Add To do</h3>
      <form onSubmit={handleSubmit} className='my-form'>
        <div className='form-control'>
          <input
            type='text'
            id='to-do-text'
            value={todo}
            onChange={e => setTodo(e.target.value)}
            data-testid='input-todo'
          />
        </div>
        <div className='form-control'>
          <input
            type='checkbox'
            id='completed'
            onChange={e => setChecked(e.target.checked)}
            value={checked}
          />
          Completed
        </div>
        <div className='form-control'>
          <button type='submit' id='submit-btn'>
            Add to do
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
