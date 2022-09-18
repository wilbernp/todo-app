import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    activeChecbox: false,
    filterTodos: [],
    typeFilter: "All",
    message:""
}

const reducers = {
    createTodo: (state, { payload }) => {
        state.todos.unshift(payload)
        state.activeChecbox = false
        state.typeFilter = "All"
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
        if (!state.todos.length) {
            state.activeChecbox = false
        }
    },
    deleteTodo: (state, { payload }) => {
        state.todos = state.todos.filter(todo => todo.id !== payload)
        if (!state.todos.length) {
            state.activeChecbox = false
        }
    },
    clearTodosCompleted: (state) => {
        state.todos = state.todos.filter(todo => !todo.complete)
        state.activeChecbox = false
    },
    handleActiveCheckbox: (state) => {
        const find = state.todos.find(todo => !todo.complete)
        state.activeChecbox = find ? false : true
    },
    handleFilterTodo: (state, { payload }) => {
        switch (payload) {

            case "All":
                state.typeFilter = payload
                state.filterTodos = state.todos
                state.message = "no task created"
                break;

            case "Active":
                state.typeFilter = payload
                state.filterTodos = state.todos.filter(todo => !todo.complete)
                state.message = "there is no pending task"
                break;

            case "Completed":
                state.typeFilter = payload
                state.filterTodos = state.todos.filter(todo => todo.complete)
                state.message = "there is no completed task"
                break;

            default:
                break;
        }
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
    handleActiveCheckbox,
    handleFilterTodo
    // filterTodoAll,
    // filterTodoActive,
    // filterTodoComplete
} = todosSlice.actions;
export default todosSlice.reducer
