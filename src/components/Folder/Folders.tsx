import styled from "styled-components";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';

const StyledFolders = styled.div`
`

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];

    return (
        <StyledFolders>
            {foldersList.map((folder, i) =>
                <Folder
                    key={folder.name} folder={folder}
                    elemPos={i}
                    total={foldersList.length}
                />
            )}
        </StyledFolders>
    );
}

export default Folders;