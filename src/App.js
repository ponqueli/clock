import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Clock from './components/Clock';
import { GlobalStyle } from "./styles/global";
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Clock toggleTheme={toggleTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
