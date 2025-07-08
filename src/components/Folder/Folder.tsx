import styled from "styled-components";
import FolderHeader from "./FolderHeader";
import { TabPosition } from "./FolderHeaderTab";
import FolderSummary from "./FolderSummary";

export interface FolderProps {
    folder: FolderContentType,
    colour: string,
    headerPosition: TabPosition,
    topPosition: string,
}

export interface FolderContentType {
    name: string,
    summary: string,
    tabName?: string,
    dates?: string,
    link?: string,
    skills?: string[]
}

const StyledFolder = styled.div<{ $topPosition: string }>`
    position: sticky;
    top: ${props => props.$topPosition};
    padding-bottom: 200px;
    margin-bottom: -200px;
`

function Folder({ folder, colour, headerPosition, topPosition }: FolderProps) {

    return (
        <StyledFolder $topPosition={topPosition} >
            <FolderHeader title={folder.tabName ?? folder.name}
                colour={colour} position={headerPosition} />
            <FolderSummary dates={folder.dates} summary={folder.summary} colour={colour} />
        </StyledFolder>
    );
}

export default Folder;