import styled from "styled-components";
import FolderHeader from "./FolderHeader";
import { TabPosition } from "./FolderHeaderTab";
import FolderSummary from "./FolderSummary";

export interface FolderProps {
    folder: FolderContentType,
    colour: string,
    headerPosition: TabPosition,
}

export interface FolderContentType {
    name: string,
    summary: string,
    tabName?: string,
    dates?: string,
    link?: string,
    skills?: string[]
}

const StyledFolder = styled.div`
    position: sticky;
    top: -70px;
    padding-bottom: 200px;
    margin-bottom: -200px;
`

function Folder(props: FolderProps) {
    const folder = props.folder;

    return (
        <StyledFolder>
            <FolderHeader title={folder.tabName ?? folder.name}
                colour={props.colour} position={props.headerPosition} />
            <FolderSummary dates={folder.dates} summary={folder.summary} colour={props.colour} />
        </StyledFolder>
    );
}

export default Folder;