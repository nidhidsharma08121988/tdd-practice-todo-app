import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import logo from './logo.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' /> React Todo App
      </header>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
