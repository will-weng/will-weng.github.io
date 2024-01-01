import styled from "styled-components";
import Projects from "./Projects";
import AboutMe from "../AboutMe";

const MainStyle = styled.div`
    line-height: 1;
`

function Main() {
    return (
        <MainStyle>
            <AboutMe />
            <Projects />
        </MainStyle>
    );
}

export default Main;