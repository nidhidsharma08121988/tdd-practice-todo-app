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
    <ul>
      {tasks.map((task, index) => (
        <li key={index} data-testid='listitem'>
          {task.title}
        </li>
      ))}
    </ul>
  ) : (
    <div>Something went wrong...</div>
  );
};

export default TodoList;
