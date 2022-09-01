import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import format from 'date-fns/format';
import { Container } from './styles';
import { useState } from 'react';

const Clock = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  const { colors } = theme;
  const time = useTime();
  
  function useTime() {
    const [time, setTime] = useState(new Date());
    
    useEffect(() => {
      const intervalId = window.setInterval(() => {
        setTime(new Date());
      }, 1000);
    
      return () => {
        window.clearInterval(intervalId);
      }
    }, []);
    
    return time;
  }

  return (
    <Container
      colors={colors}
    >
      <p> {format(time, 'PPPP')}</p>
      <h1> {format(time, 'hh:mm:ss a')} </h1>
    </Container>
  )
}

export default Clock;
