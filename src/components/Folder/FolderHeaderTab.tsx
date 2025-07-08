import { lighten, saturate } from "polished";
import styled from "styled-components";
import { useScrollContext } from "../../context/ScrollContext";
import { useDynamicViewPortWidth } from "../../context/useViewPortWidth";
import { FolderHeaderProp } from "./FolderHeader";

const StyledFolderHeaderTab = styled.div<{
    $colour: string, $borderColour: string,
    $position: string, $goToTop?: boolean
}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: absolute;
    width: 160px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    border-radius: 20px 20px 0 0;
    left: ${props => props.$position};
    top: 72px;
    background-color: ${props => props.$colour};
    border-style: solid;
    border-color: ${props => props.$borderColour};
    border-width: 4px 4px 0 4px;
    cursor: ${props => (props.$goToTop ? 'n-resize' : 'default')};
    pointer-events: auto;
`

const FindHeaderTabPosition = (elemPos: number) => {
    const width = useDynamicViewPortWidth();
    const leftPosition = elemPos % Math.ceil((width - 159) / 160);

    return (100 + leftPosition * 160).toString() + "px";
}

function FolderHeaderTab(prop: FolderHeaderProp) {
    const { scrollToTop } = useScrollContext();
    const borderColour = lighten(0.3, saturate(0.5, prop.colour));
    return (
        <StyledFolderHeaderTab
            $colour={prop.colour} $borderColour={borderColour}
            $position={prop.position ?? FindHeaderTabPosition(prop.elemPos)} $goToTop={prop.goToTop}
            onClick={prop.goToTop ? scrollToTop : undefined}
        >
            {prop.title}
        </StyledFolderHeaderTab>
    );
}

export default FolderHeaderTab;