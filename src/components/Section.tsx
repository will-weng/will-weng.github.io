import React from "react";
import styled from "styled-components";

interface SectionProps {
    children: React.ReactNode;
    heading: string
}

const SectionStyle = styled.div`
    h1 {
        margin-left: 10px;
    }
`

function Section(props: SectionProps) {
    return (
        <SectionStyle>
            <h1>{props.heading}</h1>
            {props.children}
        </SectionStyle>
    );
}

export default Section;