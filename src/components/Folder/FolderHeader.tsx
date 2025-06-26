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
    width: 100%;
    height: 100%;
    border: 1px solid black;
`
function FolderHeader(prop: FolderHeaderProps) {
    const pathData = `
        M 0 400
        C 0 300 100 200 200 200
        L 800 200
        C 900 200 1000 100 1000 0
    `;

    return (
        <StyledFolderHeader>
            <h1>{prop.title}</h1>
            <StyledSVG >
                <path
                    d={pathData}
                    stroke="black"
                    strokeWidth={5}
                    fill="none"
                    strokeLinecap="round"
                />
            </StyledSVG>
        </StyledFolderHeader>
    );
}

export default FolderHeader;