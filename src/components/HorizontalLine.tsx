import styled from "styled-components";

export const HorizontalStyle = styled.hr`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
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