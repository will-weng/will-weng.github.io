import styled from "styled-components";
import Projects from "./projects/Projects";
import AboutMe from "./AboutMe";
import Section from "./formating/Section";
import projects from './data/projects.json'
import jobs from './data/workExperiences.json'
import Education from "./Education";
import Maintenance from "./Maintenance";

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