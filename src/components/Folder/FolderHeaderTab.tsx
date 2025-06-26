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
    height: 40px;
    overflow: hidden;
    text-align: center;
    background-color: black;
    border-radius: 30px 30px 0 0;
    left: 200px;
    top: 160px;
`

function FolderHeaderTab(prop: FolderHeaderProp) {
    return (
        <StyledFolderHeaderTab>
            {prop.Title}
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;