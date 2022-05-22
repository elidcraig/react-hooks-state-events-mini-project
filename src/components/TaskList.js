import React, {useState} from "react";
import uuid from 'react-uuid'
import Task from './Task'

function TaskList({tasks}) {
  const [displayedTasks, setDisplayedTasks] = useState(tasks)

  const handleDelete = (taskId) => {
    const newTaskList = displayedTasks.filter(task => task.text !== taskId)
    setDisplayedTasks(newTaskList)
  }

  const taskComponents = displayedTasks.map(task => {
    return (
      <Task 
        key={uuid()}
        id={task.text}
        name={task.text} 
        category={task.category}
        handleDelete={handleDelete}
      />
    )
  })
  
  return (
    <div className="tasks">
      {taskComponents}
    </div>
  );
}

export default TaskList;
