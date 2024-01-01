import projectsData from '../../projects.json';
import Project from './Project';
import styled from 'styled-components';

const ProjectsStyled = styled.div`
    margin: 10px;
`

function Projects() {
    const projects = projectsData

    return (
        <ProjectsStyled>
            <h1>Projects I've worked on:</h1>
            {projects.map(project => (
                <Project key={project.name} project={project} />
            ))}
        </ProjectsStyled>
    );
}

export default Projects;
