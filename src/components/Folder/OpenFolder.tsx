import { lighten, saturate } from "polished";
import styled from "styled-components";

export interface OpenFolderProps {
    colour: string
    isOpen: boolean
}

const StyledOpenFolder = styled.div<{ $colour: string, $isOpen: boolean }>`
    max-height: ${props => props.$isOpen ? "calc(100dvh - 500px)" : "0px"};
    transition: max-height 0.5s ease;
    height: calc(100dvh - 500px);
    border-left-style: solid;
    border-right-style: solid;
    border-width: 4px;
    border-color: ${props => lighten(0.3, saturate(0.5, props.$colour))};
    background-color: ${props => props.$colour};
`

function OpenFolder({ colour, isOpen }: OpenFolderProps) {
    return (
        <StyledOpenFolder $colour={colour} $isOpen={isOpen} />
    );
}

export default OpenFolder;