import styled from "styled-components";

export const HorizontalStyle = styled.hr`
    width: 50%;
    margin: 10px auto 10px auto;
    border: 3px solid;
    border-radius: 3px;
    color: ${({ theme }) => theme.colours.Xanthous};
    background-color: ${({ theme }) => theme.colours.Xanthous};
`

function HorizontalLine() {
    return (
        <HorizontalStyle />
    );
}

export default HorizontalLine;