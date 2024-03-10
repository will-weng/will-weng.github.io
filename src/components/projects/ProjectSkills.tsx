import styled from "styled-components";

interface ProjectSkillsProps {
    skills: string[]
}

const ProjectSkillsStyle = styled.ul`
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
`

function ProjectSkills(props: ProjectSkillsProps) {
    const skills = props.skills
    return (
        <ProjectSkillsStyle >
            {skills.map(skill =>
                <li key={skill}>{skill}</li>
            )}
        </ProjectSkillsStyle >
    );
}

export default ProjectSkills;