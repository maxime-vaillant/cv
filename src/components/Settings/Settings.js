import React, { useContext } from 'react';
import './Settings.css';
import Title from '../Title/Title.js';
import DayOrNight from '../DayOrNight/DayOrNight.js';
import BackgroundContext from '../../context/background-context';

function Settings() {
  const {theme} = useContext(BackgroundContext);

  return (
    <div className='mainContainerSettings' style={{ background: theme.background, color: theme.foreground }}>
      <DayOrNight/>
      <div className='subContainerSettings'>
        <Title title='Paramètres'/>
      </div>
    </div>
  );
}

export default Settings;
