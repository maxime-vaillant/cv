import React, { useContext } from 'react';
import './Title.css';
import BackgroundContext from '../../context/background-context';


const Title = ({ title }) => {
  const {theme} = useContext(BackgroundContext);

  return (
    <div className='title'>
      <h2>{title}</h2>
      <hr style={{ background: theme.foreground }}/>
    </div>
  );
}

export default Title;
