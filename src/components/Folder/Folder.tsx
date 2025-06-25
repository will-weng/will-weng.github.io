import styled from "styled-components";

export interface FolderProps {
    folder: FolderType
}

export interface FolderType {
    name: string,
    dates: string,
    link?: string,
    description: string,
    skills: string[]
}

const StyledFolder = styled.div`

`


function Folder(props: FolderProps) {
    const folder = props.folder;

    return (
        <StyledFolder>
            {folder.name}
        </StyledFolder>
    );
}

export default Folder;