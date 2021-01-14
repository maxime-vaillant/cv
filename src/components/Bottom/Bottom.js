import React, { useContext } from 'react';
import './Bottom.css';
import BackgroundContext from '../../context/background-context';
import imgIndex from '../../assets/imgIndex.js';

const Bottom = () => {
  const {theme} = useContext(BackgroundContext);

  return(
    <div className='subContainerBottom'>
      <hr style={{ background: theme.foreground }}/>
      <div className='bottomContainer'>
        <a href='https://www.facebook.com/maxime.vaillant.3766/' target='_blank' rel="noreferrer"><img className='socialN' src={imgIndex[14]} alt='Facebook'/></a>
        <a href='https://www.instagram.com/maxime.vllnt/' target='_blank' rel="noreferrer"><img className='socialN' src={imgIndex[15]} alt='Instagram'/></a>
        <a href='https://www.linkedin.com/in/maxime-vaillant-0630351b9/' target='_blank' rel="noreferrer"><img className='socialN' src={imgIndex[16]} alt='Linkedin'/></a>
        <a href='https://github.com/maxime-vaillant' target='_blank' rel="noreferrer"><img className='socialN' src={imgIndex[17]} alt='Github'/></a>
      </div>
    </div>
  )
}

export default Bottom;
