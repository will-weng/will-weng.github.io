import styled from "styled-components";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';
import GoToTop from "./GoToTop";

const StyledFolders = styled.div`
`

function getColor(index: number, total: number) {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 75%, 15%)`;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];

    return (
        <StyledFolders>
            {foldersList.map((folder, i) =>
                <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)} />
            )}
            <GoToTop />
        </StyledFolders>
    );
}

export default Folders;