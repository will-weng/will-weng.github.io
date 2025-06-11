import Address from "./components/Address";
import Main from "./components/Main";
import Header from "./components/Header";
import styled from "styled-components";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colours.Main};

    > * {
        padding-left: 40px;
        padding-right: 40px;
    }

    * {
        background-color: ${({ theme }) => theme.colours.Main};
    }
`

function Content() {
    return (
        <ContentStyle>
            <Header />
            <Main />
            <TodoList />
            <Address />
            <Footer />
        </ContentStyle>
    );
}

export default Content;