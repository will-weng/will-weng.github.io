import styled from "styled-components";
import FolderHeaderTab from "./FolderHeaderTab";

export interface FolderHeaderProp {
    title: string,
    colour: string
}

const StyledFolderHeader = styled.div`
    position: relative;
    width: 1000px;
    height: 400px;
`

const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`

function FolderHeader(prop: FolderHeaderProp) {
    const pathData = `
        M 2 400
        C 2 300 100 200 200 200
        L 800 200
        C 900 200 998 100 998 -2
    `;

    return (
        <StyledFolderHeader>
            <FolderHeaderTab title={prop.title} colour={prop.colour} />
            <StyledSVG >
                <path
                    d={pathData}
                    stroke={prop.colour}
                    strokeWidth={4}
                    fill="none"
                    strokeLinecap="round"
                />
            </StyledSVG>
        </StyledFolderHeader>
    );
}

export default FolderHeader;