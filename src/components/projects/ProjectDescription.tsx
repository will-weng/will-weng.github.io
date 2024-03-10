import { useState } from "react";
import styled from "styled-components";
import { isGetAccessorDeclaration } from "typescript";
import Description from "./Description";

interface ProjectDescriptionProps {
    description: string;
}

const ProjectDescriptionStyle = styled.div`
    display: flex;
    flex-direction: column;
`
const ShowMoreButtonStyle = styled.button`
    margin-top: 6px;
    margin-right: auto;
    margin-left: auto;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colours.Vanilla};
    border-radius: 14px;
    color: ${({ theme }) => theme.colours.OrangeWheel};
    font-size: 18px;
    font-weight: bold;

    &:hover {
        text-decoration-color: ${({ theme }) => theme.colours.Vanilla};
        color: ${({ theme }) => theme.colours.Vanilla};
    }
`

function ProjectDescription(props: ProjectDescriptionProps) {
    const [showMore, setshowMore] = useState(false);

    return (
        <ProjectDescriptionStyle>
            <Description description={props.description} showMore={showMore} />
            <ShowMoreButtonStyle onClick={() => {
                setshowMore(!showMore)
            }} >
                {showMore ? 'Show less' : 'Show more'}
            </ShowMoreButtonStyle>
        </ProjectDescriptionStyle >
    );
}

export default ProjectDescription;