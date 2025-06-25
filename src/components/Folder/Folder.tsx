import styled from "styled-components";

export interface FolderProps {
    folder: FolderType
}

export interface FolderType {
    name: string,
    summary: string,
    dates?: string,
    link?: string,
    skills?: string[]
}

const StyledFolder = styled.div`

`

function Folder(props: FolderProps) {
    const folder = props.folder;

    return (
        <StyledFolder>
            <h1>
                {folder.name}
            </h1>
            <h3>{folder.dates}</h3>
            {folder.summary}
        </StyledFolder>
    );
}

export default Folder;