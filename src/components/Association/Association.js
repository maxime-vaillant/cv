import React, { useContext } from 'react';
import './Association.css';
import BackgroundContext from '../../context/background-context';

const Association = ({ name, periode, poste, details, photo }) => {
  const {theme} = useContext(BackgroundContext);

  return(
    <div className='subContainerAsso'>
      <div className='imageContainer'>
        <img className='image' src={photo} alt=''/>
      </div>
      <div className='textContainer'>
        <h1>{name}</h1>
        <hr style={{ background: theme.foreground }}/>
        <h3>{periode}</h3>
        <h2>{poste}</h2>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default Association;
