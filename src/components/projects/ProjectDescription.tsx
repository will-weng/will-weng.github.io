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

    const startDescript = description.split(' ').slice(0, 10).join(' ').concat(' ');
    const endDescript = description.split(' ').slice(10).join(' ');

    return (
        <ProjectDescriptionStyle>
            <p>{startDescript}
                {readMore ? endDescript : '...'}</p>
            <ReadMoreStyle onClick={() => { setreadMore(!readMore) }}>Read more...</ReadMoreStyle>
        </ProjectDescriptionStyle >
    );
}

export default ProjectDescription;