import React from 'react';
import {useParams, useHistory} from 'react-router';

import Button from './Button';

import './TaskDetails.css';

const TaskDetails = () => {
	const params = useParams();
	const history = useHistory();

	const handleBackButtonClick = () => {
		history.goBack();
	};

	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>Detalhes da tarefa para ser concluída no prazo determinado.</p>
			</div>
		</>
	);
}

export default TaskDetails;