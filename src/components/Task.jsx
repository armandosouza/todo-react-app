import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg';
import {useHistory} from 'react-router-dom';

import './Task.css';

const Task = ({item, handleTaskClick, handleTaskRemove}) => {
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`${item.title}`)
    }

    return ( 
        <div className="task-container" style={item.completed ? {borderLeft: "6px solid chartreuse"} : {}}>
            <div className="task-title" onClick={() => handleTaskClick(item.id)}>
                {item.title}
            </div>
            <div className="buttons-container">
            	<CgClose className="remove-task-button" onClick={() => handleTaskRemove(item.id)}/>
            	<CgInfo className="see-task-button" onClick={handleTaskDetailsClick}/>
            </div>
        </div>
     );
}
 
export default Task;