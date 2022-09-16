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
        let active = payload.bool
        state.todos = state.todos.map(todo => {
            if (active && todo.id !== payload.id) {
                active = todo.complete
            }
            if (todo.id === payload.id) {
                return {
                    ...todo,
                    complete: payload.bool
                }
            }
            return todo
        })
        state.activeChecbox = active

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
    clearTodosCompleted
} = todosSlice.actions;
export default todosSlice.reducer
