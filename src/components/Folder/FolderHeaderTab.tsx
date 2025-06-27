import styled from "styled-components";
import { FolderHeaderProp } from "./FolderHeader";

const StyledFolderHeaderTab = styled.div<{ $colour: string }>`
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
    top: 170px;
    background-color: ${props => props.$colour};

    * {
        background-color: ${props => props.$colour};
    }
`

function FolderHeaderTab(prop: FolderHeaderProp) {
    return (
        <StyledFolderHeaderTab $colour={prop.colour}>
            {prop.title}
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;