import styled from "styled-components";

export interface FolderSummaryProps {
    dates?: string,
    summary: string
}

const StyledFolderSummary = styled.div`
    background-color: ${({ theme }) => theme.colours.Main};
    padding-left: 40px;
    padding-right: 40px;
`

function FolderSummary(props: FolderSummaryProps) {

    return (
        <StyledFolderSummary>
            {props.dates ?? <h3>{props.dates}</h3>}
            {props.summary}
        </StyledFolderSummary>
    );
}

export default FolderSummary;