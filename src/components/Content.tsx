import Address from "./Address";
import Body from "./Body";
import Header from "./Header";
import { ContentStyle } from "./styles/Content.styled";

function Content() {
    return (
        <ContentStyle>
            <Header />
            <Body />
            <Address />
        </ContentStyle>
    );
}

export default Content;