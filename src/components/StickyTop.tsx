import styled from "styled-components";
import { useViewPortWidth } from "../context/useViewPortWidth";

export interface StickTopWrapperProps {
    element: number
    children: React.ReactNode
}

const findTopPosition = (elemPos: number, width: number) => {
    const leftPosition = elemPos % Math.ceil((width - 50) / 160);
    const row = Math.floor(elemPos / Math.ceil((width - 50) / 160));

    const topPosition = (60 + row * 30 + leftPosition * 5).toString() + "px"
    return topPosition;
}

const StyledStickTopWrapper = styled.div<{ $topPosition: string }>`
    position: sticky;
    top: ${props => props.$topPosition};
`

function StickTopWrapper({ element, children }: StickTopWrapperProps) {
    const dynamicWidth = useViewPortWidth();
    return (
        <StyledStickTopWrapper $topPosition={findTopPosition(element, dynamicWidth)} >
            {children}
        </StyledStickTopWrapper>
    );
}

export default StickTopWrapper;