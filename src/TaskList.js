import React from 'react';
import TaskItem from './TaskItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TaskList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <TransitionGroup component="ul" className="list-group">
      {tasks.map(task => (
        <CSSTransition
          key={task.id}
          timeout={300}
          classNames="task"
        >
          <TaskItem
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TaskList;
