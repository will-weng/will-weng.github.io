import { useEffect, useRef } from "react";
import styled from "styled-components";
import Folders from "./components/Folder/Folders";
import Maintenance from "./components/Maintenance";
import { useScrollContext } from "./context/ScrollContext";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colours.Main};
    
    overflow-x: hidden;
    overflow-y: scroll;
`

function Content() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { registerScrollTarget } = useScrollContext();

    useEffect(() => {
        registerScrollTarget(containerRef);
    }, [registerScrollTarget]);

    return (
        <ContentStyle ref={containerRef}>
            <Maintenance />
            <Folders />
        </ContentStyle>
    );
}

export default Content;