import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodosCompleted, deleteTodo, handleComplete } from '../../redux/slices/todosSlice'
import Checkbox from '../Checkbox/Checkbox'
import "./toDoList.css"
export default function ToDoList() {
    let dispatch = useDispatch()
    let {todos} = useSelector(state => state.todos)
    let items_left = todos.filter(todo=>!todo.complete);
    
    return (
        <div className={`container-todo-list ${!todos.length && "container-todo-center"}`}>
            {
           todos.length? todos.map((toDo) =>{
                return(
                    <div className='todo-item' key={toDo.id}>
                        <Checkbox handleActive={(bool)=>dispatch(handleComplete({bool, id:toDo.id}))} active={toDo.complete}/>
                        <label className={`label-checkbox ${toDo.complete && "label-checkbox-complete"}`}>{toDo.title}</label>
                        <a className='delete-todo' onClick={()=>dispatch(deleteTodo(toDo.id))}>X</a>
                    </div>
                )
            }):<h2 className='not-todo-text'>There is not todo</h2>
     
        }

        {todos.length? <div className='footer-todo-list'>
        <span className='info-footer-todo'>{items_left.length} items left</span>
        <a className='info-footer-todo' onClick={()=> dispatch(clearTodosCompleted())}>Clear Completed</a>
        </div>:null
        }
        </div>
    )
}

