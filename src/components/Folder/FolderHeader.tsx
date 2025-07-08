import { lighten, saturate } from "polished";
import styled from "styled-components";
import { useViewPortWidth } from "../../context/useViewPortWidth";
import FolderHeaderTab, { TabPosition } from "./FolderHeaderTab";

export interface FolderHeaderProp {
    title: string
    colour: string
    position: TabPosition
    goToTop?: boolean
    onClick?: () => void
}

const StyledFolderHeader = styled.div`
    position: relative;
    width: 1000px;
    height: 1000px;
    background: transparent;
    margin-bottom: -700px;
`

const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`

function generatePath(dynamicLength: number) {
    //     M 2 600 
    //     L 2 300 
    //     M 2 300 
    //     C 2 250 50 200 100 200 
    //     L 900 200 
    //     C 950 200 998 150 998 100 
    //     L 998 0 
    //     L 998 300 
    //     M 998 600 
    //     L 998 300
    const bottomY = 1000;
    const controlY = 300;
    const width = 200 + dynamicLength
    const rightEdge = width - 2
    const leftEdge = 2

    const bezier1 = `C 2 250 50 200 100 200`;
    const bezier2 = `C ${rightEdge - 48} 200 ${rightEdge} 150 ${rightEdge} 100`;

    return `
    M ${leftEdge} ${bottomY}
    L ${leftEdge} ${controlY}
    M ${leftEdge} ${controlY}
    ${bezier1}
    L ${width - 100} 200
    ${bezier2}
    L ${rightEdge} 0
    L ${rightEdge} ${controlY}
    M ${rightEdge} ${bottomY}
    L ${rightEdge} ${controlY}
  `;
}

function FolderHeader(prop: FolderHeaderProp) {
    return (
        <StyledFolderHeader>
            <FolderHeaderTab
                title={prop.title} colour={prop.colour}
                position={prop.position} goToTop={prop.goToTop}
                onClick={prop.onClick}
            />
            <StyledSVG>
                <path
                    style={{
                        cursor: prop.goToTop ? 'n-resize' : 'default'
                    }}
                    onClick={prop.onClick}
                    d={generatePath(useViewPortWidth() - 200)}
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