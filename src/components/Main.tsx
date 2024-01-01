import styled from "styled-components";
import Projects from "./projects/Projects";
import AboutMe from "./AboutMe";
import Section from "./Section";
import projects from './data/projects.json'
import jobs from './data/workExperiences.json'
import Education from "./Education";

const MainStyle = styled.div`
    line-height: 1;
`

function Main() {
    return (
        <MainStyle>
            <AboutMe />
            <Section heading="Past work Experiences:">
                <Projects projects={jobs} />
            </Section>
            <Section heading="Projects I've worked on:">
                <Projects projects={projects} />
            </Section>
            <Section heading="Educational qualifications:">
                <Education />
            </Section>
        </MainStyle>
    );
}

export default Main;