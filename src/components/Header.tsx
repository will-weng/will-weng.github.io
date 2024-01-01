import styled from "styled-components";

const HeaderStyle = styled.header`
    padding-top: 10px;
    margin: 0px 10px 10px 10px;

    * {
        margin: 0px;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <h1>William Weng's</h1>
        </HeaderStyle>
    );
}

export default Header;