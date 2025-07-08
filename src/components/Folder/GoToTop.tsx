import styled from "styled-components";
import FolderHeader from "./FolderHeader";

const StyledGoToTop = styled.div`
    position: absolute;
    bottom: 0px;
    overflow: hidden;
`

function GoToTop() {
    return (
        <StyledGoToTop>
            <FolderHeader title={"Go To Top"} colour={"black"} position={"750px"} />
        </StyledGoToTop >
    );
}

export default GoToTop;