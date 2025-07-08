import styled from "styled-components";
import { useViewPortWidth } from "../../context/useViewPortWidth";
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
    const dynamicWidth = useViewPortWidth();
    return (
        <StyledFolders>
            {foldersList.map((folder, i) =>
                <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)} />
            )}
            {/* <GoToTop color="black" position={(dynamicWidth).toString() + "px"} /> */}
            <GoToTop color="black" position={(dynamicWidth - 250).toString() + "px"} />
        </StyledFolders>
    );
}

export default Folders;