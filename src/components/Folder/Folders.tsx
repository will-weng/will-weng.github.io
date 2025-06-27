import styled from "styled-components";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';

const StyledFolder = styled.div`
`

function getColor(index: number, total: number) {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 80%, 60%)`;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];

    return (
        <StyledFolder>
            {foldersList.map((folder, i) =>
                (<Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}></Folder>)
            )}
        </StyledFolder>
    );
}

export default Folders;