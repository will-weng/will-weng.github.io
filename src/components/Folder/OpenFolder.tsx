import { lighten, saturate } from "polished";
import styled from "styled-components";

export interface OpenFolderProps {
    colour: string
}

const StyledOpenFolder = styled.div<{ $colour: string }>`
    transition: 5ms ease-in;
    height: calc(100dvh - 500px);
    border-left-style: solid;
    border-right-style: solid;
    border-width: 4px;
    border-color: ${props => lighten(0.3, saturate(0.5, props.$colour))};
    background-color: ${props => props.$colour};
`

function OpenFolder({ colour }: OpenFolderProps) {
    return (
        <StyledOpenFolder $colour={colour} />
    );
}

export default OpenFolder;