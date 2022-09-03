import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Clock from './components/Clock';
import { GlobalStyle } from "./styles/global";
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(darkTheme);
  const { colors, title } = theme;

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Clock
        title={title}
        colors={colors} 
        toggleTheme={toggleTheme}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
