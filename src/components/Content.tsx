import Address from "./Address";
import Main from "./Main";
import Header from "./Header";
import styled from "styled-components";

const ContentStyle = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colours.PrussianBlue};

    > * {
        padding-left: 10px;
        padding-right: 10px;
    }

    * {
        background-color: ${({ theme }) => theme.colours.PrussianBlue};
    }
`

function Content() {
    return (
        <ContentStyle>
            <Header />
            <Main />
            <Address />
        </ContentStyle>
    );
}

export default Content;