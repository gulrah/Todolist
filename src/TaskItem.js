import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const TaskItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <Card className="task-item shadow-sm mb-3">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={8}>
            {isEditing ? (
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSave()}
                className="form-control"
              />
            ) : (
              <Card.Text style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </Card.Text>
            )}
          </Col>
          <Col xs={4} className="text-right">
            {isEditing ? (
              <Button variant="success" onClick={handleSave}>Save</Button>
            ) : (
              <>
                <Button variant="primary" onClick={handleEdit}>Edit</Button>{' '}
                <Button variant="success" onClick={() => toggleComplete(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </Button>{' '}
                <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
              </>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
