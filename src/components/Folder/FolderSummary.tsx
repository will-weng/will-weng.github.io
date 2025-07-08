import { lighten, saturate } from "polished";
import styled from "styled-components";

export interface FolderSummaryProps {
    dates?: string,
    summary: string,
    colour: string,
}

const StyledFolderSummary = styled.div<{ $colour: string }>`
    background-color: ${props => props.$colour};
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 200px;
    margin-bottom: -200px;
    border-left-style: solid;
    border-right-style: solid;
    border-width: 4px;
    border-color: ${props => lighten(0.3, saturate(0.5, props.$colour))};
`

function FolderSummary(props: FolderSummaryProps) {
    return (
        <StyledFolderSummary $colour={props.colour}>
            {props.dates ?? <h3>{props.dates}</h3>}
            <br />
            {props.summary}
        </StyledFolderSummary>
    );
}

export default FolderSummary;