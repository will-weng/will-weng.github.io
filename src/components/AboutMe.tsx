import styled from "styled-components";

const AboutMeStyle = styled.div`
    margin: 10px;
`

function AboutMe() {
    return (
        <AboutMeStyle>
            <h1>About me</h1>
            <p>Text about me!</p>
        </AboutMeStyle>
    );
}

export default AboutMe;