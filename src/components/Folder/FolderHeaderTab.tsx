import styled from "styled-components";

interface FolderHeaderTab {
    Title: string
}

const StyledFolderHeaderTab = styled.div`
    position: absolute;
    border-style: solid;
`

function FolderHeaderTab(prop: FolderHeaderTab) {

    return (
        <StyledFolderHeaderTab>
            <h1>
                {prop.Title}
            </h1>
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;