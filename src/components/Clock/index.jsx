import React, { useEffect } from 'react';
import { useState } from 'react';
import format from 'date-fns/format';
import Switch from 'react-switch';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import { Container, SwitchIcon, ButtonSwitch } from './styles';

const Clock = ({ toggleTheme, colors, title }) => {
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
      <ButtonSwitch>
        <Switch
          className="react-switch"
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={<SwitchIcon src={SunIcon} alt="Sun"/>} 
          uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon"/>} 
          onColor={colors.onPrimary}
          offColor={colors.backgroundSwitch}
          boxShadow="1px 1px 5px rgb(255, 234, 0)"
          activeBoxShadow="0px 0px 0px 10px rgba(255, 234, 0, 0.20)"
        />
      </ButtonSwitch>
    </Container>
  )
}

export default Clock;
