import logo from './logo.svg';
import './App.css';
import './TaskList';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
        <h1>To-Do List</h1>
        <input></input>
        <button>Add To-Do</button>
        <TaskList />
        <TaskList />
    </div>
  );
}

export default App;
