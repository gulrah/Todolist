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
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="form-row">
        <div className="col-9 col-md-10">
          <input
            type="text"
            className="form-control"
            placeholder="Add new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-3 col-md-2">
          <button type="submit" className="btn btn-primary btn-block">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTaskForm;
