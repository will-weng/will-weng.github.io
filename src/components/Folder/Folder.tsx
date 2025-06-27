import styled from "styled-components";
import FolderHeader from "./FolderHeader";
import FolderSummary from "./FolderSummary";

export interface FolderProps {
    folder: FolderContentType,
    colour: string
}

export interface FolderContentType {
    name: string,
    summary: string,
    tabName?: string,
    dates?: string,
    link?: string,
    skills?: string[]
}

const StyledFolder = styled.div<{ $colour: string }>`
    background-color: ${props => props.$colour};
    padding-bottom: 400px;
    margin-bottom: -400px;
`

function Folder(props: FolderProps) {
    const folder = props.folder;

    return (
        <StyledFolder $colour={props.colour} >
            <FolderHeader title={folder.tabName ?? folder.name} colour={props.colour} />
            <FolderSummary dates={folder.dates} summary={folder.summary} colour={props.colour} />
        </StyledFolder>
    );
}

export default Folder;