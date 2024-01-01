import theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Content from './components/Content';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Content />
    </ThemeProvider>
  );
}

export default App;
