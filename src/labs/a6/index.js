import {Link}
    from "react-router-dom";
import Nav from "../../nav.js";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput
    from "./conditional-output";
import TodoList from "./todo/todo-list.js";


function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6;