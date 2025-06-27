import styled from "styled-components";

interface FolderHeaderProp {
    Title: string
}

const StyledFolderHeaderTab = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    width: 150px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    background-color: black;
    border-radius: 20px 20px 0 0;
    left: 200px;
    top: 170px;
`

function FolderHeaderTab(prop: FolderHeaderProp) {
    return (
        <StyledFolderHeaderTab>
            {prop.Title}
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;