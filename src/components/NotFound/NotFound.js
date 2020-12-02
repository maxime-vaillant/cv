import React, { useContext } from 'react';
import './NotFound.css';
import Title from '../Title/Title.js';
import DayOrNight from '../DayOrNight/DayOrNight.js';
import BackgroundContext from '../../context/background-context';


function NotFound() {
  const {theme} = useContext(BackgroundContext);

  return (
    <div className='mainContainer' style={{ background: theme.background, color: theme.foreground }}>
      <DayOrNight/>
      <Title title='404 NOT FOUND'/>
    </div>
  );
}

export default NotFound;
