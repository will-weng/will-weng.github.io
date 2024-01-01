import styled from 'styled-components';
import workData from './workExperiences.json'

const ExperiencesStyle = styled.div`
    margin: 10px;
`

function WorkExperiences() {
    const workExperiences = workData;
    return (
        <ExperiencesStyle>
            <h1>Past work experiences:</h1>

        </ExperiencesStyle>
    );
}

export default WorkExperiences;