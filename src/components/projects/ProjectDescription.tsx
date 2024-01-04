import { useState } from "react";
import styled from "styled-components";

interface ProjectDescriptionProps {
    description: string;
}

const ProjectDescriptionStyle = styled.div`
`
const ReadMoreStyle = styled.p`
    text-decoration:underline;
    &:hover {
        text-decoration-color: ${({ theme }) => theme.colours.Vanilla};
        color: ${({ theme }) => theme.colours.Vanilla};
    }
`

function ProjectDescription(props: ProjectDescriptionProps) {
    const [readMore, setreadMore] = useState(false);

    const description = props.description;

    const shortDescript = description.split(' ').slice(0, 10).join(' ').concat('...');
    return (
        <ProjectDescriptionStyle>
            {readMore ?
                <p>{description}</p> :
                <p>{shortDescript}</p>
            }
            <ReadMoreStyle onClick={() => { setreadMore(!readMore) }}>Read more...</ReadMoreStyle>
        </ProjectDescriptionStyle >
    );
}

export default ProjectDescription;