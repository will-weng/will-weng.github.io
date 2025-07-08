import { lighten, saturate } from "polished";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FolderHeaderTab from "./FolderHeaderTab";

export interface FolderHeaderProp {
    title: string,
    colour: string,
    position: string
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

function useViewportWidth() {
    const [width, setWdith] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => { setWdith(window.innerWidth) };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    return width;
}

function FolderHeader(prop: FolderHeaderProp) {
    const viewportWidth = useViewportWidth();
    const dynamicWidth = (viewportWidth < 1000) ? viewportWidth - 200 : 800;

    return (
        <StyledFolderHeader>
            <FolderHeaderTab title={prop.title} colour={prop.colour} position={prop.position} />
            <StyledSVG >
                <path
                    d={generatePath(dynamicWidth)}
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