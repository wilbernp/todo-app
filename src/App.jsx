import React from 'react'
import "./App.css"
import CreateToDo from './components/CreateToDo/CreateToDo'
import FilterToDo from './components/FilterToDo/FilterToDo'
import ToDoList from './components/ToDoList/ToDoList'
export default function App() {
  return (
    <div className='app-container'>
      <CreateToDo/>
      <ToDoList/>
      <FilterToDo/>
    </div>
  )
}
