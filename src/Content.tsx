import { useEffect, useRef } from "react";
import styled from "styled-components";
import Folders from "./components/Folder/Folders";
import { useScrollContext } from "./context/ScrollContext";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: calc(100dvh - 200px);
    background-color: ${({ theme }) => theme.colours.Main};
    margin-top: 200px;

    overflow-x: hidden;
    overflow-y: scroll;
`

function Content() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { registerScrollTarget, updateScrollPosition } = useScrollContext();

    useEffect(() => {
        registerScrollTarget(containerRef.current);
    }, [registerScrollTarget]);

    return (
        <ContentStyle ref={containerRef} onScroll={updateScrollPosition} >
            <Folders />
        </ContentStyle>
    );
}

export default Content;