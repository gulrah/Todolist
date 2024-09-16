import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-primary btn-custom">
            <i className="fas fa-plus"></i> Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
