import styled from "styled-components";

const StyledFolder = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 1000px;
    height: 100vh;
    height: 100dvh;
    background-color: ${({ theme }) => theme.colours.Main};
    border-style: solid;
    border-width: 1px;
    overflow: auto;
`

function Folders() {
    return (
        <StyledFolder>
            This is a folder
        </StyledFolder>
    );
}

export default Folders;