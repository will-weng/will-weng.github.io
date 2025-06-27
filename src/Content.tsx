import styled from "styled-components";
import Folders from "./components/Folder/Folders";
import Maintenance from "./components/Maintenance";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: calc(100vh - 100px);
    height: calc(100dvh - 100px);
    margin-top: 100px;
    background-color: ${({ theme }) => theme.colours.Main};
    
    overflow: scroll;
    scrollbar-width: none;  /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
    &::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */
        display: none;
    }
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