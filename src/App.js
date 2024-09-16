import React, { useState, useEffect } from 'react';
import Header from './Header';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import './styles.css';  // Ensure you import your styles

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false); // State for Dark Mode

  // Load tasks from local storage when the app loads
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const toggleDarkMode = () => setDarkMode(!darkMode); // Toggle Dark Mode

  return (
    <div className={`container app ${darkMode ? 'dark-mode' : ''}`}>
      {/* Dark Mode Toggle Button */}
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="btn btn-secondary">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      
      {/* Main To-Do List Components */}
      <Header />
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
