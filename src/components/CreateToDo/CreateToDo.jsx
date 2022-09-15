import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./createToDo.css"
export default function CreateToDo() {
  const [active, setActive] = useState(false)
  function handleActive(bool){
    setActive(bool)
  }
  return (
    <form className='form-create-todo'>
      <h1 className='title-create-todo'>TODO</h1>
      <div className='container-input-create'>
        <div>
          <input className='input-text-create' type="text" placeholder='Create a new todo...'/>
        </div>
        <div className='container-checkbox-create'>
          <Checkbox handleActive={handleActive} active={active}/>
        </div>
      </div>
    </form>
  )
}
