import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React To-Do List 📝</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="list-group">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success text-decoration-line-through" : ""
            }`}
          >
            <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;