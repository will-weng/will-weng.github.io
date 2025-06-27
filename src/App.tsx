import styled, { ThemeProvider } from 'styled-components';
import Content from './Content';
import Header from './Header';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

const StyleApp = styled.div`
    background-color: ${({ theme }) => theme.colours.Background};
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <StyleApp>
                <Header />
                <Content />
            </StyleApp>
        </ThemeProvider>
    );
}

export default App;
