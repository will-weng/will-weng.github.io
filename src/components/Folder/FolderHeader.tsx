import { lighten, saturate } from "polished";
import styled from "styled-components";
import { useScrollContext } from "../../context/ScrollContext";
import { useDynamicViewPortWidth } from "../../context/useViewPortWidth";
import FolderHeaderTab from "./FolderHeaderTab";

export interface FolderHeaderProp {
    title: string
    colour: string
    elemPos: number
    position?: string;
    goToTop?: boolean
}

const StyledFolderHeader = styled.div`
    position: relative;
    width: 1000px;
    height: 200px;
    background: transparent;
`

const StyledSVG = styled.svg`
    width: 100%;
    height: 100%;
`

function generatePath(dynamicLength: number) {
    // M 2 200 
    // C 2 150 50 100 100 100 
    // L 900 100 
    // C 950 100 998 50 998 0 
    // L 998 200
    const bottomY = 200;
    const controlY = 100;
    const width = 200 + dynamicLength
    const rightEdge = width - 2
    const leftEdge = 2

    const bezier1 = `C 2 150 50 ${controlY} ${controlY} ${controlY}`;
    const bezier2 = `C ${rightEdge - 48} ${controlY} ${rightEdge} 50 ${rightEdge} 0`;

    return `
    M ${leftEdge} ${bottomY}
    ${bezier1}
    L ${width - 100} ${controlY}
    ${bezier2}
    L ${rightEdge} ${bottomY}
  `;
}

function FolderHeader(prop: FolderHeaderProp) {
    var { scrollToTop } = useScrollContext();

    return (
        <StyledFolderHeader>
            <FolderHeaderTab {...prop} />
            <StyledSVG>
                <path
                    style={{
                        cursor: prop.goToTop ? 'n-resize' : 'default',
                        pointerEvents: 'auto'
                    }}
                    onClick={prop.goToTop ? scrollToTop : undefined}
                    d={generatePath(useDynamicViewPortWidth())}
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