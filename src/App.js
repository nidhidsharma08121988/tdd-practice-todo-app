import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const [newTasks, setNewTasks] = useState([]);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' /> React Todo App
      </header>
      <AddTodoForm addNewTask={setNewTasks} />
      <TodoList newTask={newTasks} />
    </div>
  );
}

export default App;
