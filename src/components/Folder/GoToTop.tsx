import styled from "styled-components";
import FolderHeader from "./FolderHeader";

export interface GoToTopProps {
    color: string,
    position: string
}

const StyledGoToTop = styled.div`
    position: absolute;
    bottom: 0px;
    overflow: hidden;
`

function GoToTop(prop: GoToTopProps) {
    return (
        <StyledGoToTop>
            <FolderHeader title={"Go To Top"} colour={prop.color} position={prop.position} />
        </StyledGoToTop >
    );
}

export default GoToTop;