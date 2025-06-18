import styled from "styled-components";
import AboutMe from "./AboutMe";
import projects from './data/projects.json';
import jobs from './data/workExperiences.json';
import Education from "./Education";
import Section from "./formating/Section";
import Projects from "./projects/Projects";

const MainStyle = styled.div`
`

function Main() {
    return (
        <MainStyle>
            <AboutMe />
            <Section heading="Past work Experiences:">
                <Projects projects={jobs} />
            </Section>
            <Section heading="Academic level:">
                <Education />
            </Section>
            <Section heading="Projects I've worked on:">
                <Projects projects={projects} />
            </Section>
        </MainStyle>
    );
}

export default Main;