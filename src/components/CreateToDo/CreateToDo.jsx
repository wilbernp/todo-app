import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./createToDo.css"
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import {createTodo, handleActiveCheckbox, handleCompleteAll} from "../../redux/slices/todosSlice"

export default function CreateToDo() {

  // const [active, setActive] = useState(false)
  const [input, setInput] = useState("")
  let dispatch = useDispatch()
  let {activeChecbox} = useSelector(state => state.todos)

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
      <h1 className='title-create-todo'>TODO</h1>
      <div className='container-input-create'>
        <div>
          <input className='input-text-create' type="text" placeholder='Create a new todo...' value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className='container-checkbox-create'>
          <Checkbox handleActive={handleActive} active={activeChecbox} />
        </div>
      </div>
    </form>
  )
}
