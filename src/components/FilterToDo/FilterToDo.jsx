import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleFilterTodo } from '../../redux/slices/todosSlice'
import "./filterToDo.css"

const filters = ["All", "Active", "Completed"]

export default function FilterToDo() {
  let dispatch = useDispatch()

  let {typeFilter, lightMode} = useSelector(state => state.todos)

  function handleClick(filter) {
    dispatch(handleFilterTodo(filter))
  }
  return (
    <div>
      <div className={`container-filter-todo ${lightMode && "container-filter-todo-light"}`}>
        {
          filters.map((filter, i) => (
            <a
            key={i}
              className={`filter-todo 
              ${filter === typeFilter && "filter-todo-active"}`}
              onClick={() => handleClick(filter)}
            >{filter}</a>
          ))
        }
      </div>
      <p className='parragraph-drag-drop'>Drag and drop reoder list</p>
    </div>
  )
}
