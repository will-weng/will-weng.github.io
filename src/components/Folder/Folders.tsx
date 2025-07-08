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

const findHeaderPosition = (elemPos: number, width: number) => {
    const leftPosition = elemPos % Math.ceil((width - 50) / 160);

    console.log(leftPosition);

    const tabPosition: TabPosition = {
        width: "0px",
        leftPosition: (100 + leftPosition * 160).toString() + "px"
    }
    return tabPosition;
}

const findTopPosition = (elemPos: number, width: number) => {
    const row = Math.floor(elemPos / Math.ceil((width - 50) / 160));

    const topPosition = (60 + row * 30).toString() + "px"
    return topPosition;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];
    const dynamicWidth = useViewPortWidth();

    return (
        <StyledFolders>
            {foldersList.map((folder, i) =>
                <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}
                    headerPosition={findHeaderPosition(i, dynamicWidth - 200)}
                    topPosition={findTopPosition(i, dynamicWidth - 200)} />
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