import styled from "styled-components";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';

const StyledFolder = styled.div`
    margin-top: -150px;
    overflow-y: clip;
`

function getColor(index: number, total: number) {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 75%, 15%)`;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];

    return (
        <StyledFolder>
            {foldersList.map((folder, i) =>
                (<Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}></Folder>)
            )}
            <div style={{ height: '300px' }} />
        </StyledFolder>
    );
}

export default Folders;