import styled from "styled-components";
import FolderHeaderTab from "./FolderHeaderTab";

export interface FolderHeaderProps {
    title: string,
    color: string
}

const StyledFolderHeader = styled.div`
    position: relative;
    width: 1000px;
    height: 400px;
`

const StyledSVG = styled.svg`
    background-color: ${({ theme }) => theme.colours.Main};
    width: 100%;
    height: 100%;
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
            <FolderHeaderTab Title={prop.title} />
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