import styled from "styled-components";

export interface StickTopWrapperProps {
    element: number
    children: React.ReactNode
}

const StyledStickTopWrapper = styled.div<{ $bottomPosition: string }>`
    position: sticky;
    bottom: calc(100dvh - 1000px);
`

function StickBottomWrapper({ element, children }: StickTopWrapperProps) {
    return (
        <StyledStickTopWrapper $bottomPosition={"300px"} >
            {children}
        </StyledStickTopWrapper>
    );
}

export default StickBottomWrapper;