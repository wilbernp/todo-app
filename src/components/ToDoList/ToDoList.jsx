import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import { useDispatch, useSelector } from 'react-redux'
import { clearTodosCompleted, deleteTodo, handleActiveCheckbox, handleComplete, setTodos } from '../../redux/slices/todosSlice'
import Checkbox from '../Checkbox/Checkbox'
import "./toDoList.css"
import cross_icon from "../../assets/images/icon-cross.svg"

export default function ToDoList() {
    let dispatch = useDispatch()
    let { filterTodos, message, lightMode } = useSelector(state => state.todos)
    let items_left = filterTodos.filter(todo => !todo.complete);

    function handleActive(bool, id) {
        dispatch(handleComplete({ bool, id }))
        dispatch(handleActiveCheckbox())
    }

    function handleDelete(id) {
        dispatch(deleteTodo(id))
    }

    const container_todo_list = `container-todo-list 
    ${!filterTodos.length && "container-todo-center"} 
    ${lightMode && "container-todo-list-light"}`

    return (
        <div className={container_todo_list}>
            {
                !filterTodos.length ?
                    <h2 className='not-todo-text'>{message}</h2> :
                    <>
                    <ReactSortable
                    list={filterTodos.map(todo =>{
                        return{
                            id: todo.id,
                            title: todo.title,
                            complete: todo.complete
                          }
                    })}

                    setList={(list) => dispatch(setTodos(list))}

                    dragClass="drag"
                    chosenClass='chosen'
                    ghostClass='ghost'

                    animation={400}
                    >
                        {filterTodos.map((toDo) => {
                            return (
                                <div
                                    className={`todo-item ${lightMode && "todo-item-light"}`}
                                    key={toDo.id}>
                                    <Checkbox
                                        handleActive={(bool) => handleActive(bool, toDo.id)}
                                        active={toDo.complete}
                                        lightMode={lightMode} />
                                    <label
                                        className={`label-checkbox 
                                    ${toDo.complete &&
                                            "label-checkbox-complete"}`}
                                    >
                                        {toDo.title}
                                    </label>
                                    <a className='button-delete-todo'
                                        onClick={() => handleDelete(toDo.id)}>
                                        <img src={cross_icon} alt="cross-icon" />
                                    </a>

                                </div>
                            )
                        })}
                    </ReactSortable>


                        <div className='footer-todo-list'>
                            <span className='info-footer-todo'>{items_left.length} items left</span>
                            <a className='info-footer-todo' onClick={() => dispatch(clearTodosCompleted())}>Clear Completed</a>
                        </div>
                    </>

            }
        </div>
    )
}

