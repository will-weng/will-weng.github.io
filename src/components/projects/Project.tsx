import styled from 'styled-components';
import ProjectSkills from './ProjectSkills';

export interface ProjectProps {
    project: ProjectType
}

export interface ProjectType {
    name: string,
    dates: string,
    link?: string,
    description: string,
    skills: string[]
}

const ProjectStyled = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

function Project(props: ProjectProps) {
    const project = props.project;

    return (
        <ProjectStyled key={project.name}>
            <h2>
                {
                    project.link ?
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a> :
                        project.name
                }
            </h2>
            <p>{project.dates}</p>
            <p>{project.description}</p>
            <ProjectSkills skills={project.skills} />
        </ProjectStyled>
    );
}

export default Project;