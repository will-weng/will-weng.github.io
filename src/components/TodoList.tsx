import styled from "styled-components";

const TodoListStyle = styled.div`
`

const todoList = [
    'Blog posts',
    'Footer',
    'Go to top button',
    'images',
    'display picture',
    'about me section',
    'hexagon board game',
    'Panels that open'
]

function TodoList() {
    return (
        <TodoListStyle>
            <h1>Things to be done on this website.</h1>
            <ul>
                {todoList.map(item => <li>{item}</li>)}
            </ul>
        </TodoListStyle>
    );
}

export default TodoList;