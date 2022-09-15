import React from 'react'
import "./filterToDo.css"
export default function FilterToDo() {
  return (
    <div>
      <div className='container-filter-todo'>
        <a className='filter-todo' href="#">All</a>
        <a className='filter-todo' href="#">Active</a>
        <a className='filter-todo' href="#">Complete</a>
      </div>
      <p className='parragraph-drag-drop'>Drag and drop reoder list</p>
    </div>
  )
}
