import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./createToDo.css"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo, handleCompleteAll, handleLightMode } from "../../redux/slices/todosSlice"
import moon_icon from "../../assets/images/icon-moon.svg"
import sun_icon from "../../assets/images/icon-sun.svg"

export default function CreateToDo() {
  const [input, setInput] = useState("")
  let dispatch = useDispatch()
  let { activeChecbox, lightMode } = useSelector(state => state.todos)

  function handleActive(bool) {
    dispatch(handleCompleteAll(bool))

  }

  function handleSubmit(e) {
    e.preventDefault()
    if (input.length) {
      let newTodo = {
        id: uuidv4(),
        title: input,
        complete: false
      }
      setInput("")
      dispatch(createTodo(newTodo))
    }
  }

  return (
    <form className='form-create-todo' onSubmit={handleSubmit}>
      <div className="flex-container">
        <h1 className='title-create-todo'>TODO</h1>
        <img onClick={()=>dispatch(handleLightMode())} className='icon-dark-light-mode' src={lightMode?moon_icon:sun_icon} alt="sun icon" />
      </div>
      <div className='container-input-create'>
        <div>
          <input 
          className={`input-text-create ${lightMode && "input-text-create-light"}`} 
          type="text" 
          placeholder='Create a new todo...' 
          value={input} 
          onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='container-checkbox-create'>
          <Checkbox 
          handleActive={handleActive} 
          active={activeChecbox} 
          lightMode={lightMode}/>
        </div>
      </div>
    </form>
  )
}
