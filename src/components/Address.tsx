import { Tooltip } from "react-tooltip";
import styled from "styled-components";

const AddressStyle = styled.address`
    text-align: right;
`

function Address() {
    const handleCopy = () => {
        navigator.clipboard.writeText("william.weng@hotmail.com");
    };

    return (
        <AddressStyle>
            <a href="https://github.com/will-weng"
                target="_blank"
                rel="noopener noreferrer">
                Github
            </a>
            <br />
            <a href="https://www.linkedin.com/in/will-weng/"
                target="_blank"
                rel="noopener noreferrer">
                Linkedin
            </a>
            <br />
            <span
                className="my-email"
                onClick={handleCopy}
                style={{ cursor: 'pointer', textDecoration: 'underline' }}
                data-tooltip-id="copied-tooltip">
                william.weng@hotmail.com
            </span>
            <Tooltip
                id="my-tooltip"
                anchorSelect=".my-email"
                content="copied!"
                openOnClick={true}
                globalCloseEvents={{ scroll: true, resize: true }} />
        </AddressStyle>
    );
}

export default Address;