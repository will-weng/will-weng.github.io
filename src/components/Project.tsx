import styled from 'styled-components';
import ProjectSkills from './ProjectSkills';

interface ProjectProps {
    project: Project;
}

interface Project {
    name: string,
    dates: string,
    description: string,
    skills: string[]
}

const ProjectStyled = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
`

function Project(props: ProjectProps) {
    const project = props.project

    return (
        <ProjectStyled key={project.name}>
            <h2>{project.name}</h2>
            <p>{project.dates}</p>
            <p>{project.description}</p>
            <ProjectSkills skills={project.skills} />
        </ProjectStyled>
    );
}

export default Project;