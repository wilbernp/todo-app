import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    activeChecbox: false
}

const reducers = {
    createTodo: (state, { payload }) => {
        state.todos.push(payload)
        state.activeChecbox = false
    },
    handleComplete: (state, { payload }) => {
    
        state.todos = state.todos.map(todo => {
    
            if (todo.id === payload.id) {
                return {
                    ...todo,
                    complete: payload.bool
                }
            }
            return todo
        })
    },
    handleCompleteAll: (state, { payload }) => {
        state.todos = state.todos.map(todo => {
            return {
                ...todo,
                complete: payload
            }
        })
        state.activeChecbox = payload
    },
    setTodos: (state, { payload }) => {
        state.todos = payload
         const find = state.todos.find(todo => !todo.complete)
         state.activeChecbox = find? false:true
    },
    deleteTodo: (state, { payload }) => {
        state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    clearTodosCompleted: (state) => {
        state.todos = state.todos.filter(todo => !todo.complete)
        state.activeChecbox = false
    },
    handleActiveCheckbox: (state) =>{
        console.log(state.todos.length)
        const length = state.todos.length

        const find = state.todos.find(todo => !todo.complete)
        state.activeChecbox = find && length<0? false:true
    }
}

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers
})

export const {
    createTodo,
    setTodos,
    deleteTodo,
    handleComplete,
    handleCompleteAll,
    clearTodosCompleted,
    handleActiveCheckbox
} = todosSlice.actions;
export default todosSlice.reducer
