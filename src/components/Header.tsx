import styled from "styled-components";

const HeaderStyle = styled.header`
    padding-top: 10px;
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