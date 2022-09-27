import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./App.css"
import CreateToDo from './components/CreateToDo/CreateToDo'
import FilterToDo from './components/FilterToDo/FilterToDo'
import ToDoList from './components/ToDoList/ToDoList'
import { getItemLocalStorage, setItemLocalStorage } from './localStorage/localStorage'
import { handleActiveCheckbox, handleFilterTodo, setTodos } from './redux/slices/todosSlice'
export default function App() {
  let dispatch = useDispatch()
  let { todos, typeFilter, lightMode } = useSelector(state => state.todos)

  useEffect(() => {
    console.log("useefect1")
    let todoList = getItemLocalStorage("todos")
    dispatch(setTodos(todoList || []))
    dispatch(handleActiveCheckbox())
  }, [])

  useEffect(() => {
    console.log("useefect2")
    dispatch(handleFilterTodo(typeFilter))
    setItemLocalStorage("todos", todos)
  }, [todos])



  return (
    <div className={`app-container ${lightMode && "app-container-light"}`}>
      <div className="components-container">
        <CreateToDo />
        <ToDoList />
        <FilterToDo />
      </div>
    </div>
  )
}