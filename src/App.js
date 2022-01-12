import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false
    },
    {
      id: "2",
      title: "Ler livros",
      completed: true
    }
  ])

  const handleTaskClick = (taskId) => {
    const newList = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });

    setTasks(newList)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTask = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTask);
  }

  const handleTaskRemove = (taskId) => {
    const taskRemove = tasks.filter(task => task.id !== taskId)

    setTasks(taskRemove)
  }

  return (
    <Router>
      <div className="container">
        <Header />
          <Route path="/" exact render={() => {
            return (
              <>
                <NewTask handleTaskAdd={handleTaskAdd}/>
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove}/>
              </>
              )
          }} />
          <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  )
}

export default App;