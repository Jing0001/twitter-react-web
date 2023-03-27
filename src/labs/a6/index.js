import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";
import Nav from "../../nav";
function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <Classes/>
            <Styles/>
            <TodoItem/>
            <ConditionalOutput/>
            <TodoList/>
        </div>
    )
}
export default Assignment6;
