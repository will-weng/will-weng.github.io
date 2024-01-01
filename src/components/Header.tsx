import styled from "styled-components";

const HeaderStyle = styled.header`
    padding-top: 10px;
`

function Header() {
    return (
        <HeaderStyle>
            <h1>William Weng</h1>
        </HeaderStyle>
    );
}

export default Header;