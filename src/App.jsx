import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import CreateToDo from './components/CreateToDo/CreateToDo'
import FilterToDo from './components/FilterToDo/FilterToDo'
import ToDoList from './components/ToDoList/ToDoList'
import { setTodos } from './redux/slices/todosSlice'
export default function App() {
  let dispatch = useDispatch()
  let {todos} = useSelector(state => state.todos)
  
  useEffect(() => {
    console.log("useefect1")
    let todoList = JSON.parse(localStorage.getItem("todos"))
    dispatch(setTodos(todoList || []))
  }, [])

  useEffect(() => {
    console.log("useefect2")
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  
  return (
    <div className='app-container'>
      <CreateToDo/>
      <ToDoList/>
      <FilterToDo/> 
    </div>
  )
}