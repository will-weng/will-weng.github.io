import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Maintenance from "./components/Maintenance";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    height: 100dvh;
    padding-top: 100px;
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
            <AboutMe />
            <Maintenance />
            {/* <Main />
            <TodoList />
            <Address />
            <Footer /> */}
        </ContentStyle>
    );
}

export default Content;