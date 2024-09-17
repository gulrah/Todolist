import React, { useState } from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [editError, setEditError] = useState('');

  const handleEdit = () => setIsEditing(true);

  const handleSave = () => {
    if (newText.trim() === "") {
      setEditError("Task cannot be empty");
      return;
    }
    editTask(task.id, newText);
    setIsEditing(false);
    setEditError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center py-3 task-item">
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
      {editError && <p className="error-text mt-2">{editError}</p>}
    </li>
  );
};

export default TaskItem;
