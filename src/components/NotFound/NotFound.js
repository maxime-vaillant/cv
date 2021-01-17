import React, { useContext } from 'react';
import './NotFound.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Title from '../Title/Title.js';
import BackgroundContext from '../../context/background-context';


function NotFound() {
  const {theme} = useContext(BackgroundContext);

  return (
    <div className='mainContainer404' style={{ background: theme.background, color: theme.foreground }}>
      <div className='subContainer404'>
        <Title title='404 NOT FOUND'/>
        <div className='from404toHome'>
          <Link to='/'>
            <Icon name='home' size='massive'/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
