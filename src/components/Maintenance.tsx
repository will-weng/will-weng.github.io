import styled from "styled-components";

const MaintenanceStyle = styled.div`
    margin-left: auto;
    margin-right: auto;
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