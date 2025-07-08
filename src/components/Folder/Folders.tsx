import styled from "styled-components";
import { useViewPortWidth } from "../../context/useViewPortWidth";
import foldercontent from '../data/folderContent.json';
import StickBottomWrapper from "../StickyBottom";
import Folder, { FolderContentType } from './Folder';
import GoToTop from "./GoToTop";

const StyledFolders = styled.div`
`

const getColor = (index: number, total: number) => {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 75%, 15%)`;
}

const findHeaderPosition = (elemPos: number, width: number) => {
    const leftPosition = elemPos % Math.ceil((width - 50) / 160);
    const tabPosition = {
        width: "0px",
        leftPosition: (100 + leftPosition * 160).toString() + "px"
    }
    return tabPosition;
}

function Folders() {
    const foldersList: FolderContentType[] = foldercontent as FolderContentType[];
    const dynamicWidth = useViewPortWidth();
    return (
        <StyledFolders>
            {/* {foldersList.map((folder, i) =>
                <StickTopWrapper element={i}>
                    <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}
                        headerPosition={findHeaderPosition(i, dynamicWidth - 200)} />
                </StickTopWrapper>
            )} */}
            {foldersList.map((folder, i) =>
                <StickBottomWrapper element={i}>
                    <Folder key={folder.name} folder={folder} colour={getColor(i, foldersList.length)}
                        headerPosition={findHeaderPosition(i, dynamicWidth - 200)} />
                </StickBottomWrapper>
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