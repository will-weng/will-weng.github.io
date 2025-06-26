import styled from "styled-components";
import FolderHeader from "./FolderHeader";
import FolderSummary from "./FolderSummary";

export interface FolderProps {
    folder: FolderContentType
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
`

function Folder(props: FolderProps) {
    const folder = props.folder;

    return (
        <StyledFolder>
            <FolderHeader title={folder.tabName ?? folder.name} color="test" />
            <FolderSummary dates={folder.dates} summary={folder.summary} />
        </StyledFolder>
    );
}

export default Folder;