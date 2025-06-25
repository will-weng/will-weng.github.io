import { useState } from "react";
import styled from "styled-components";
import foldercontent from '../data/projects.json';
import Folder, { FolderType } from './Folder';

const StyledFolder = styled.div`
`

function Folders() {
    const [foldersList, setFoldersList] = useState<FolderType[]>(foldercontent as FolderType[]);

    return (
        <StyledFolder>
            {foldersList.map((folder, i) =>
                (<Folder key={folder.name} folder={folder}></Folder>)
            )}
        </StyledFolder>
    );
}

export default Folders;