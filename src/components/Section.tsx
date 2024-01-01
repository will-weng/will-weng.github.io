import React from "react";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";

interface SectionProps {
    children: React.ReactNode;
    heading: string
}

const SectionStyle = styled.div`
    margin-top: 20px;
    
`

function Section(props: SectionProps) {
    return (
        <SectionStyle>
            <HorizontalLine />
            <h1>{props.heading}</h1>
            {props.children}
        </SectionStyle>
    );
}

export default Section;