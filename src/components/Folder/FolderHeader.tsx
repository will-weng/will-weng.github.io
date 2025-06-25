import styled from "styled-components";

export interface FolderHeaderProps {
    title: string,
    color: string
}

const StyledFolderHeader = styled.div`
    width: 1000px;
    height: 400px;
`

const StyledSVG = styled.svg`
    border-style: solid;
`
const StyledPolygon = styled.polygon`
    background-color: #000000;
`

function FolderHeader(prop: FolderHeaderProps) {
    return (
        <StyledFolderHeader>
            <h1>{prop.title}</h1>
            <StyledSVG >
                <StyledPolygon points={"0% 100%, 0% 40%, 50% 0%, 100% 40%, 100% 100%"}
                    fill="#3b82f6" />
            </StyledSVG>
        </StyledFolderHeader>
    );
}

export default FolderHeader;