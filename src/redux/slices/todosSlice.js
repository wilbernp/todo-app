import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: []
}

const reducers = {
    createTodo: (state, { payload }) => {
        state.todos.push(payload)
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
    },
    setTodos: (state, { payload }) => {
        state.todos = payload
    },
    deleteTodo: (state, { payload }) => {
        state.todos = state.todos.filter(todo => todo.id !== payload)
    },
    clearTodosCompleted: (state) => {
        state.todos = state.todos.filter(todo => !todo.complete)
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
