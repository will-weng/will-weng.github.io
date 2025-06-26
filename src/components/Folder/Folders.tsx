import styled from "styled-components";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';

const StyledFolder = styled.div`
`

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];

    return (
        <StyledFolder>
            {foldersList.map((folder, i) =>
                (<Folder key={folder.name} folder={folder}></Folder>)
            )}
        </StyledFolder>
    );
}

export default Folders;