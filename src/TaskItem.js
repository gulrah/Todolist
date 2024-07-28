// src/TaskItem.js
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <CSSTransition
      key={task.id}
      timeout={300}
      classNames="task"
    >
      <li className="list-group-item task-item d-flex justify-content-between align-items-center">
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        ) : (
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
        )}
        <div className="button-group">
          {isEditing ? (
            <button className="btn btn-sm btn-success btn-custom" onClick={handleSave}>
              Save
            </button>
          ) : (
            <>
              <button className="btn btn-sm btn-primary btn-custom" onClick={handleEdit}>
                Edit
              </button>
              <button className="btn btn-sm btn-success btn-custom" onClick={() => toggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button className="btn btn-sm btn-danger btn-custom" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      </li>
    </CSSTransition>
  );
};

export default TaskItem;
