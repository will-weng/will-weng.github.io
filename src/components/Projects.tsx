import projectsData from '../projects.json';
import ProjectSkills from './ProjectSkills';

function Projects() {
    const projects = projectsData

    return (
        <>
            {projects.map(project => (
                <div key={project.name}>
                    <h2>{project.name}</h2>
                    <p>{project.dates}</p>
                    <p>{project.description}</p>
                    <ProjectSkills skills={project.skills} />
                </div>
            ))}
        </>
    );

}

export default Projects;