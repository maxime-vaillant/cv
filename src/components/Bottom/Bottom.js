import React, { useContext } from 'react';
import './Bottom.css';
import BackgroundContext from '../../context/background-context';
import Themes from '../../context/Themes.js';


const Bottom = () => {
  const {theme} = useContext(BackgroundContext);

  return(
    <div className='subContainerBottom'>
      <hr style={{ background: theme.foreground }}/>
      <p>Web App Made In React</p>
      <img/>
    </div>
  )
}

export default Bottom;
