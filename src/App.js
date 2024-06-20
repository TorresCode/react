import React, { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  let message = 'Hello TC' 
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Studing React JS',
      completed: false,
    },
    {
      id: '2',
      title: 'Studing Vue JS',
      completed: true,
    },
    {
      id: '3',
      title: 'Studing Adonis JS',
      completed: true,
    }

  ])

  return <>
    <div className='container'>
      TorresCode Hello World!!!!
      <span>Update</span>
    </div>
  </>
}

export default App;