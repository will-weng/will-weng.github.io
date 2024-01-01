import styled from "styled-components";

const HeaderStyle = styled.header`
    padding-top: 10px;
    margin-left: 10px;
    margin-right: 10px;

    * {
        margin: 0px;
    }
`

function Header() {
    return (
        <HeaderStyle>
            <h1>Header for William Weng's page</h1>
        </HeaderStyle>
    );
}

export default Header;