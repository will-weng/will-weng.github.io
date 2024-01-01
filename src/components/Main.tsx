import styled from "styled-components";
import Projects from "./projects/Projects";
import AboutMe from "./AboutMe";
import WorkExperiences from "./experience/WorkExperiences";

const MainStyle = styled.div`
    line-height: 1;
`

function Main() {
    return (
        <MainStyle>
            <AboutMe />
            <WorkExperiences />
            <Projects />
        </MainStyle>
    );
}

export default Main;