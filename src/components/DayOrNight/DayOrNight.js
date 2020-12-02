import React, { useContext } from 'react';
import './DayOrNight.css';
import { Button, Icon } from 'semantic-ui-react';
import BackgroundContext from '../../context/background-context';
import Themes from '../../context/Themes.js';


const DayOrNight = () => {
  const {theme, updateThemeLight, updateThemeDark} = useContext(BackgroundContext);

  return(
    <Button.Group className='buttonContainer'>
      <Button icon positive={theme == Themes.light} onClick={updateThemeLight}>
        <Icon name='sun' />
      </Button>
      <Button icon positive={theme == Themes.dark} onClick={updateThemeDark}>
        <Icon name='moon'/>
      </Button>
    </Button.Group>
  )
}

export default DayOrNight;
