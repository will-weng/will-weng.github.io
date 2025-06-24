import styled from "styled-components";
import AboutMe from "./components/AboutMe";
import Folders from "./components/Folders";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    height: 100dvh;
    padding-top: 100px;
    background-color: ${({ theme }) => theme.colours.Main};
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */

    * {
        background-color: ${({ theme }) => theme.colours.Main};
    }
`

function Content() {
    return (
        <ContentStyle>
            <AboutMe />
            <Folders />
        </ContentStyle>
    );
}

export default Content;