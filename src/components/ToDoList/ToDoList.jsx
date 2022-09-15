import React, { useState } from 'react'
import Checkbox from '../Checkbox/Checkbox'
import "./toDoList.css"
let toDos = [
    {title: "Complete online JavaScript course", complete:true},
    {title: "Jog around the park 3x", complete:false},
    {title: "10 minutes meditation", complete:false},
    {title: "Read for 1 hour", complete:false},
    {title: "Pick up graceries", complete:false},
    {title: "Complete Todo App Frontend Mentor Complete Todo App Frontend Mentor", complete:false}
    
]
export default function ToDoList() {
    const [active, setActive] = useState(false)
    function handleActive(bool){
        setActive(bool)
    }
  return (
    <div className='container-todo-list'>
        {
            toDos.map((toDo) =>{
                return(
                    <div className='todo-item'>
                        <Checkbox label={toDo.title} handleActive={handleActive} active={active}/>
                        <a className='delete-todo'>X</a>
                    </div>
                )
            })
        }
        <div className='footer-todo-list'>
        <span className='info-footer-todo'>{toDos.length} items left</span>
        <a className='info-footer-todo'>Clear Completed</a>
        </div>
    </div>
  )
}
