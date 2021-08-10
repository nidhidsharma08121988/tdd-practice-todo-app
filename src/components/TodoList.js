import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const taskList = res.data;
      setTasks(taskList);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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
