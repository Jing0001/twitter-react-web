// import useState to manage local component state
import React, {useState} from "react";
// useDispatch hook to call reducers
import {useDispatch, useSelector}
    from "react-redux";
// import reducer function exported by todos-reducer
import {addTodo, deleteTodo, todoDoneToggle}
    from "./reducers/todos-reducer";
const Todos = () => {
    // retrieve todos from reducer store state,
    // access it within a React component, and assign to local todos constant
    const todos = useSelector(state => state.todos);
    // useState returns an array with two elements:
    // the current state value and a function to update that value.
    // an initial state is defined as an object with a single property do set to an empty string.
    // The todo variable holds the current state value, and the setTodo function is used to update the state when needed.
    const [todo, setTodo] = useState({do: ''});
    // get distacher to invoke reducer functions
    const dispatch = useDispatch();
    // handle checkbox click event, accept todo index
    const toggleTodoDone = (todo) => {
        // send index to reducer function, passing index of todo to toggle done field
        dispatch(todoDoneToggle(todo))
    }
// delete button click, accepts todo index, passing index of todo we want to delete
    const deleteTodoClickHandler = (index) => {
        // dispatch event to deleteTodo reducer function
        dispatch(deleteTodo(index))
    }
    // handle click event of button
    const createTodoClickHandler = () => {
        // call reducer function passing new todo as the payload in the action object
        dispatch(addTodo(todo))
    }

    // handle keystroke changes in input field
    const todoChangeHandler = (event) => {
        // get data from input field
        const doValue = event.target.value;
        // create new todo object instance, setting todo's do property
        const newTodo = {
            do: doValue
        };
        // change local state todo variable
        setTodo(newTodo);
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {/*add a new line item*/}
                <li className="list-group-item">
                    {/* button calls function to handle click event*/}
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Create</button>
                    {/*containing an input field to type todo*/}
                    <input
                        // handle keystrokes to update component state
                        onChange={todoChangeHandler}
                        // update field with latest state value
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {
                    // add index parameter
                    todos.map((todo, index) =>
                        <li className="list-group-item">
                            {/*new Delete button sends index of todo to delete to handler*/}
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger
                      float-end ms-2">
                                Delete
                            </button>
                            <input type="checkbox"
                                   checked={todo.done}
                                // if user changes checkbox, pass the todo to reducer function to update todo's state
                                   onChange={() =>
                                       toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }
            </ul>
        </>
    );
};

export default Todos;
