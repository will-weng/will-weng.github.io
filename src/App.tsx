import theme from './styles/Theme';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import Content from './Content';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content />
    </ThemeProvider>
  );
}

export default App;
