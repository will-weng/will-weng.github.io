import styled from 'styled-components';
import GoToTop from './components/Folder/GoToTop';
import Maintenance from './components/Maintenance';
import Content from './Content';
import { AppProviders } from './context/AppProvider';
import Header from './Header';

const StyleApp = styled.div`
    font-size: large;
    background-color: ${({ theme }) => theme.colours.Background};
    height: 100dvh;
    width: 100dvw;
    overflow: hidden;
`;

function App() {
    return (
        <AppProviders>
            <StyleApp>
                <Header />
                <Maintenance />
                <Content />
                <GoToTop />
            </StyleApp>
        </AppProviders>
    );
}

export default App;
