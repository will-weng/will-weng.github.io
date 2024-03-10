import styled from "styled-components";

export const HorizontalStyle = styled.hr`
    width: 70%;
    margin: 10px auto 10px auto;
    border: 2px solid;
    border-radius: 2px;
    color: ${({ theme }) => theme.colours.Xanthous};
    background-color: ${({ theme }) => theme.colours.Xanthous};
`

function HorizontalLine() {
    return (
        <HorizontalStyle />
    );
}

export default HorizontalLine;