import styled from "styled-components";

export interface FolderHeaderProps {
    title: string,
    color: string
}

const StyledFolderHeader = styled.div`
`

const StyledSVG = styled.svg`
    border-style: solid;
`

function FolderHeader(prop: FolderHeaderProps) {
    return (
        <StyledFolderHeader>
            <h1>{prop.title}</h1>
            <StyledSVG >
                <polygon>
                </polygon>
            </StyledSVG>
        </StyledFolderHeader>
    );
}

export default FolderHeader;