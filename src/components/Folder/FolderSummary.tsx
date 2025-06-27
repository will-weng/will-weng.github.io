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
    padding-bottom: 300px;
    margin-bottom: -400px;
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