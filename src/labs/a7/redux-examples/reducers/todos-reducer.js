import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    // sets the slice name
    name: 'todos',
    initialState: initialTodos,
    // The reducers object contains reducer functions, each responsible for handling a specific action type
    reducers: {
        // addTodo reducer function to receive current state and mutate current state into new state
        // receive the new todo instance and push it to the array of current todos.
        addTodo(state, action) {
            // a new todo object is pushed to the existing state array. This updates the state with the new todo item
            state.push({
                // ensures a unique identifier
                _id: (new Date()).getTime(),
                // The do property is set to the value of action.payload.do, which contains data needed to update the state.
                do: action.payload.do,
                // set done property to false
                done: false
            });
        },
        // The state is assumed to be an array of todo objects.
        //  The action object contains a payload that represents the index of the todo item that needs to be deleted.
        deleteTodo(state, action) {
            // extracts the index of the todo item to be deleted from the action's payload
            const index = action.payload
            // index: at which the deletion should occur; 1: the number of elements to remove
            state.splice(index, 1)
        },
        todoDoneToggle(state, action) {
            const todo = state.find((todo) =>
                todo._id === action.payload._id)
            todo.done = !todo.done
        }

    }
});
// export actions so we can call them from UI
export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions
export default todosSlice.reducer
