import styled from "styled-components";
import { useViewPortWidth } from "../../context/useViewPortWidth";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';
import { TabPosition } from "./FolderHeaderTab";
import GoToTop from "./GoToTop";

const StyledFolders = styled.div`
`

function getColor(index: number, total: number) {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 75%, 15%)`;
}

const findHeaderPosition = (elemPos: number, total: number, width: number) => {
    const leftPosition = 150;

    const tabPosition: TabPosition = {
        width: "0px",
        leftPosition: leftPosition.toString() + "px"
    }
    return tabPosition;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];
    const dynamicWidth = useViewPortWidth();

    return (
        <StyledFolders>
            {foldersList.map((folder, i) =>
                <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}
                    headerPosition={findHeaderPosition(i, foldersList.length, dynamicWidth)} />
            )}
            <GoToTop color="black"
                position={{
                    width: "0px",
                    leftPosition: (dynamicWidth - 250).toString() + "px"
                }}
            />
        </StyledFolders>
    );
}

export default Folders;