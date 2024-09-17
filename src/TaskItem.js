import React, { useState } from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);
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
    <li className="list-group-item d-flex justify-content-between align-items-center">
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

      <div className="btn-group">
        {isEditing ? (
          <button className="btn btn-success btn-sm" onClick={handleSave}>
            Save
          </button>
        ) : (
          <>
            <button className="btn btn-primary btn-sm" onClick={handleEdit}>
              Edit
            </button>
            <button className="btn btn-success btn-sm" onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
