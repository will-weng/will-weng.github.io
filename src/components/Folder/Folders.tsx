import styled from "styled-components";
import theme from "../../styles/Theme";
import foldercontent from '../data/folderContent.json';
import Folder, { FolderContentType } from './Folder';
import OpenFolder from "./OpenFolder";

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
                    open={i === (foldersList.length - 1) ? true : false}
                />
            )}
            <OpenFolder colour={theme.colours.Main} isOpen={true} />
        </StyledFolders>
    );
}

export default Folders;