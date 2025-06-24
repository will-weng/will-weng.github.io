import { ThemeProvider } from 'styled-components';
import Content from './Content';
import Header from './Header';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Content />
    </ThemeProvider>
  );
}

export default App;
