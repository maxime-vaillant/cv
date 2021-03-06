import React, { useContext } from 'react';
import './Competence.css';
import { Progress } from 'semantic-ui-react'
import BackgroundContext from '../../context/background-context';
import Themes from '../../context/Themes.js';


const Association = ({ name, pourcentage, photo }) => {
  const {theme} = useContext(BackgroundContext);

  return(
    <div className='subContainer'>
      <div className='imageContainerCompet'>
        <img className='imageCompet' src={photo}/>
      </div>
      <div className='textContainer'>
        <h1>{name}</h1>
        <hr style={{ background: theme.foreground }}/>
        <div className='pourcent'>
          <Progress percent={pourcentage} size='tiny' indicating/>
        </div>
      </div>
    </div>
  )
}

export default Association;
