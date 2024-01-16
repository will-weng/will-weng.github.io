import { useState } from "react";
import styled from "styled-components";

interface ProjectDescriptionProps {
    description: string;
}

const ProjectDescriptionStyle = styled.div`
    display: flex;
    flex-direction: column;
`
const ShowMoreStyle = styled.button`
    margin-top: 6px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colours.Vanilla};
    border-radius: 5px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colours.OrangeWheel};
    color: ${({ theme }) => theme.colours.PrussianBlue};

    &:hover {
        text-decoration-color: ${({ theme }) => theme.colours.Vanilla};
        color: ${({ theme }) => theme.colours.Vanilla};
    }
`

function ProjectDescription(props: ProjectDescriptionProps) {
    const [showMore, setshowMore] = useState(false);

    const description = props.description;

    const startDescript = description.split(' ').slice(0, 10).join(' ');
    const endDescript = ' ' + description.split(' ').slice(10).join(' ');

    return (
        <ProjectDescriptionStyle>
            <p>{startDescript}
                {showMore ? endDescript : '...'}
            </p>
            <ShowMoreStyle onClick={() => { setshowMore(!showMore) }}>
                {showMore ? 'Show less' : 'Show more'}
            </ShowMoreStyle>
        </ProjectDescriptionStyle >
    );
}

export default ProjectDescription;