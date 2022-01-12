import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskRemove}) => {
    return(
        <>
            {tasks.map(task => (
                <Task key={task.id} item={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
            ))}
        </>
    )
};

export default Tasks;