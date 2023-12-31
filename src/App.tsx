import theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';
import Address from './components/Address';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <script src="https://coolors.co/palette-widget/widget.js"></script>
      <script data-id="035877856947641773">new CoolorsPaletteWidget("035877856947641773", ["003049","d62828","f77f00","fcbf49","eae2b7"]); </script>
      <GlobalStyles />
      <Header />
      <Body />
      <Address />
    </ThemeProvider>
  );
}

export default App;
