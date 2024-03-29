import styled from "styled-components";

const AddressStyle = styled.address`
    margin-top: auto;
`

function Address() {
    return (
        <AddressStyle>
            <h1>Contacts</h1>
            Find my github at: <a href="https://github.com/will-weng"> My github!</a> <br />
            Email me at: <a href="mailto:william.weng@hotmail.com">william.weng@hotmail.com</a>
        </AddressStyle>
    );
}

export default Address;