interface ProjectSkillsProps {
    skills: string[]
}

function ProjectSkills(props: ProjectSkillsProps) {
    const skills = props.skills
    return (
        <ul>
            {skills.map(skill =>
                <li>{skill}</li>
            )}
        </ul>
    );
}

export default ProjectSkills;