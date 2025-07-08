import styled from "styled-components";
import Address from "./components/Address";

const HeaderStyle = styled.header`
    position: fixed;
    height: 100px;
    width: min(1000px, 100vw);
    background-color: ${({ theme }) => theme.colours.Main};
    margin: auto;

    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    left: 0;
    right: 0;
    top: 0;
    padding-left: 40px;
    padding-right: 40px;
    border-style: solid;
    z-index: 1;

    * {
        color: ${({ theme }) => theme.colours.Text};
        background-color: ${({ theme }) => theme.colours.Main};
    }
`

const StyledH1 = styled.h1`
    transition: color 0.3s ease;
    &:hover {
        color: #00ccff;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <StyledH1>
                    William Weng
                </StyledH1>
            </a>
            <Address />
        </HeaderStyle>
    );
}

export default Header;