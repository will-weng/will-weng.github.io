import styled from "styled-components";
import Folders from "./components/Folder/Folders";
import Maintenance from "./components/Maintenance";

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
    return (
        <ContentStyle>
            <Maintenance />
            <Folders />
        </ContentStyle>
    );
}

export default Content;