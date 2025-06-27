import styled from "styled-components";

const MaintenanceStyle = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    width: 1000px;
    border-style: solid;
    border-top: hidden;

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