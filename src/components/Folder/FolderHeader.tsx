import { lighten, saturate } from "polished";
import styled from "styled-components";
import FolderHeaderTab from "./FolderHeaderTab";

export interface FolderHeaderProp {
    title: string,
    colour: string
}

const StyledFolderHeader = styled.div`
    position: relative;
    width: 1000px;
    height: 1500px;
    background: transparent;
    margin-bottom: -1100px;
`

const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`

const pathData = `
    M 2 1500
    L 2 400
    M 2 400
    C 2 300 100 200 200 200
    L 800 200
    C 900 200 998 100 998 -10
    L 998 400
    M 998 1500
    L 998 400
`;

function FolderHeader(prop: FolderHeaderProp) {
    return (
        <StyledFolderHeader>
            <FolderHeaderTab title={prop.title} colour={prop.colour} />
            <StyledSVG >
                <path
                    d={pathData}
                    stroke={lighten(0.3, saturate(0.6, prop.colour))}
                    strokeWidth={4}
                    fill={prop.colour}
                    strokeLinecap="round"
                />
            </StyledSVG>
        </StyledFolderHeader>
    );
}

export default FolderHeader;