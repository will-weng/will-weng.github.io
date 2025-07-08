import styled from "styled-components";
import FolderHeader from "./FolderHeader";
import { TabPosition } from "./FolderHeaderTab";

export interface GoToTopProps {
    color: string,
    position: TabPosition
}

const StyledGoToTop = styled.div`
    position: absolute;
    bottom: 0px;
    overflow: hidden;
    width: min(100dvw, 1000px);
    pointer-events: none;
`

function GoToTop(prop: GoToTopProps) {
    return (
        <StyledGoToTop>
            <FolderHeader
                title={"Go To Top"} colour={prop.color} position={prop.position}
                goToTop={true}
            />
        </StyledGoToTop >
    );
}

export default GoToTop;