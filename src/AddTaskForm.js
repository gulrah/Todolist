import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

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
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Add new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="shadow-sm"
        />
        <InputGroup.Append>
          <Button variant="primary" type="submit" className="btn-custom">
            <i className="fas fa-plus"></i> Add Task
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  );
};

export default AddTaskForm;
