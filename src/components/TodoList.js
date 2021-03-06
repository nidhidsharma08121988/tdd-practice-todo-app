import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = ({ newTask }) => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  const fetchTasks = async () => {
    try {
      setError(null);
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const taskList = res.data;
      setTasks(taskList);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    if (counter === 0) {
      fetchTasks();
    }
    setCounter(1);
    if (newTask) {
      setTasks([...tasks, newTask]);
    }
    //eslint-disable-next-line
  }, [newTask]);

  return error === null ? (
    <div>
      <h3>To do task List </h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} data-testid='listitem'>
            <span className={task.completed ? 'li-completed' : ''}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>Something went wrong...</div>
  );
};

export default TodoList;
