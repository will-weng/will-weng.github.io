import styled, { ThemeProvider } from 'styled-components';
import Content from './Content';
import { ViewportProvider } from './context/useViewPortWidth';
import Header from './Header';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

const StyleApp = styled.div`
    font-size: large;
    background-color: ${({ theme }) => theme.colours.Background};
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <StyleApp>
                <ViewportProvider>
                    <Content />
                </ViewportProvider>
            </StyleApp>
        </ThemeProvider>
    );
}

export default App;
