import React, {useState} from 'react';
import Button from './Button';

import './NewTask.css';

const NewTask = ({handleTaskAdd}) => {
    const [inputData, setInputData] = useState('') 

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    };

    const handleButtonNewTask = () => {
        handleTaskAdd(inputData)
        setInputData('');
    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} type="text" className="add-task-input" value={inputData}/>
            <div className="add-task-button-container">
                <Button onClick={handleButtonNewTask}>Adicionar</Button>
            </div>
        </div>
    );
}

export default NewTask;