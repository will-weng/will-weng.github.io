import { ThemeProvider } from 'styled-components';
import Content from './Content';
import GlobalStyles from './styles/Global';
import theme from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content />
    </ThemeProvider>
  );
}

export default App;
