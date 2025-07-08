import styled, { ThemeProvider } from 'styled-components';
import Content from './Content';
import Header from './Header';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

const StyleApp = styled.div`
    font-size: large;
    background-color: ${({ theme }) => theme.colours.Background};
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;

    * {
        scrollbar-width: none;  /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */
        &::-webkit-scrollbar { /* Hide scrollbar for Chrome, Safari and Opera */
            display: none;
        }
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <StyleApp>
                <Content />
            </StyleApp>
        </ThemeProvider>
    );
}

export default App;
