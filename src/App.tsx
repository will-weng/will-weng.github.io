import theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Body />
    </ThemeProvider>
  );
}

export default App;
