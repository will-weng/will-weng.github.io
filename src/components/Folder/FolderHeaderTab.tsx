import { lighten, saturate } from "polished";
import styled from "styled-components";
import { FolderHeaderProp } from "./FolderHeader";

const StyledFolderHeaderTab = styled.div<{ $colour: string, $borderColour: string }>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    width: 150px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    border-radius: 20px 20px 0 0;
    left: 200px;
    top: 172px;
    background-color: ${props => props.$colour};
    border-style: solid;
    border-color: ${props => props.$borderColour};
    border-width: 4px 4px 0 4px;
`

function FolderHeaderTab(prop: FolderHeaderProp) {
    const borderColour = lighten(0.3, saturate(0.5, prop.colour));

    return (
        <StyledFolderHeaderTab $colour={prop.colour} $borderColour={borderColour}>
            {prop.title}
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;