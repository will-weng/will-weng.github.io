import styled from "styled-components";
import { useDynamicViewPortWidth } from "../../context/useViewPortWidth";
import FolderHeader from "./FolderHeader";


const StyledGoToTop = styled.div`
    position: fixed;
    bottom: -50px;
    left: max(0px, calc((100dvw - 1000px) / 2));
    overflow: hidden;
    width: min(100dvw, 1000px);
    pointer-events: none;
`

function GoToTop() {
    const width = useDynamicViewPortWidth() - 60;
    return (
        <StyledGoToTop>
            <FolderHeader
                title={"Go To Top"} colour={"black"} elemPos={0}
                position={width.toString() + "px"} goToTop={true}
            />
        </StyledGoToTop >
    );
}

export default GoToTop;