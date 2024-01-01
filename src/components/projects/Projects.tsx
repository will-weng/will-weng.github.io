import Project, { ProjectType } from './Project';
import styled from 'styled-components';

interface ProjectsProps {
    projects: ProjectType[];
}

const ProjectsStyled = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

function Projects(props: ProjectsProps) {
    const projects = props.projects;

    return (
        <ProjectsStyled>
            {projects.map(project => (
                <Project key={project.name} project={project} />
            ))}
        </ProjectsStyled>
    );
}

export default Projects;
