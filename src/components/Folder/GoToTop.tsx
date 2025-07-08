import styled from "styled-components";
import FolderHeader from "./FolderHeader";


const StyledGoToTop = styled.div`
    position: absolute;
    bottom: 0px;
    overflow: hidden;
    width: min(100dvw, 1000px);
    pointer-events: none;
`

function GoToTop() {
    return (
        <StyledGoToTop>
            <FolderHeader
                title={"Go To Top"} colour={"black"} elemPos={0}
                position={"850px"} goToTop={true}
            />
        </StyledGoToTop >
    );
}

export default GoToTop;