import styled from "styled-components";
import { Link } from "react-router";

const HeaderStyle = styled.header`
    padding-top: 10px;
`
const StyledLink = styled(Link)`
    transition: color 0.3s ease;
    &:hover {
        color: #00ccff;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <h1>
                <StyledLink to="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                    William Weng
                </StyledLink>
            </h1>
        </HeaderStyle>
    );
}

export default Header;