import styled from "styled-components";

const MaintenanceStyle = styled.div`
    position: absolute;
    top: 100px;
    margin-left: auto;
    margin-right: auto;
    width: min(100dvw, 1000px);
    border-style: solid;
    border-top: hidden;
    left: max(0px, calc((100dvw - 1000px) / 2));
    z-index: 1;

    background-color: ${({ theme }) => theme.colours.Main};;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
`

function Maintenance() {
    return (
        <MaintenanceStyle>
            <h1>Under Maintenance</h1>
            <h1>More Changes Coming Soon!</h1>
        </MaintenanceStyle>
    );
}

export default Maintenance;