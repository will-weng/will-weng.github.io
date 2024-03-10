import styled from "styled-components";

const EducationStyle = styled.div`
`

function Education() {
    return (
        <EducationStyle>
            <p>2023</p>
            <a href="/data/AcademicAchievement.pdf" title="Click to download Academic Achievements" download>
                Bachelor of Science in Computer Science
                <br />
                at the University of New South Wales
            </a>
        </EducationStyle>
    );
}

export default Education;