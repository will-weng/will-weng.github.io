import styled from "styled-components";

const HeaderStyle = styled.header`
    position: fixed;
    padding-top: 10px;
    left: 0;
    right: 0;
    margin: auto;
    height: 100px;
    width: min(1000px, 100vw);
    background-color: ${({ theme }) => theme.colours.Main};
    padding-left: 40px;
    padding-right: 40px;
    border-style: solid;

    * {
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
        </HeaderStyle>
    );
}

export default Header;