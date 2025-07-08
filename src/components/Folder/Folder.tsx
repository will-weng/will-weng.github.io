import { useRef, useState } from "react";
import styled from "styled-components";
import { useDynamicViewPortWidth } from "../../context/useViewPortWidth";
import FolderHeader from "./FolderHeader";
import FolderSummary from "./FolderSummary";
import OpenFolder from "./OpenFolder";

export interface FolderProps {
    folder: FolderContentType
    elemPos: number
    total: number
    open: boolean
}

export interface FolderContentType {
    name: string
    summary: string
    tabName?: string
    dates?: string
    link?: string
    skills?: string[]
}

const StyledFolder = styled.div<{
    $topPosition?: string,
}>`
    position: sticky;
    top: ${props => props.$topPosition};
`

const getColor = (index: number, total: number) => {
    const hue = (index * 360 / total) % 360;
    return `hsl(${hue}, 75%, 15%)`;
}

const FindTopPosition = (elemPos: number) => {
    const width = useDynamicViewPortWidth();
    const leftPosition = elemPos % Math.ceil((width - 159) / 160);
    const row = Math.floor(elemPos / Math.ceil((width - 159) / 160));

    const topPosition = (row * 30 + leftPosition * 5 - 34).toString() + "px"
    return topPosition;
}

function Folder({ folder, elemPos, total, open }: FolderProps) {
    const colour = getColor(elemPos, total);
    const folderRef = useRef<HTMLDivElement>(null);
    const [openFolder, setOpenFolder] = useState(open)

    return (
        <StyledFolder
            onClick={() => setOpenFolder(!openFolder)}
            ref={folderRef}
            $topPosition={FindTopPosition(elemPos)}
        >
            <FolderHeader title={folder.tabName ?? folder.name}
                colour={colour} elemPos={elemPos} />
            <FolderSummary dates={folder.dates} summary={folder.summary} colour={colour} />
            <OpenFolder colour={colour} isOpen={openFolder} />
        </StyledFolder>
    );
}

export default Folder;