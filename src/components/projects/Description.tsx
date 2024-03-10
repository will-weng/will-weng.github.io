import styled from "styled-components";

interface DescriptionProps {
    description: string;
    showMore: boolean;
}

const DescriptionStyle = styled.p<{ showMore?: boolean; }>`
    overflow: hidden;
    max-height: 1em;
    ${props => props.showMore ? 'max-height: 10em;' : ''};
    transition: max-height 0.4s ease-out;
`

function Description(props: DescriptionProps) {

    return (
        <DescriptionStyle showMore={props.showMore}>
            {props.description}
        </DescriptionStyle>
    )
}

export default Description;