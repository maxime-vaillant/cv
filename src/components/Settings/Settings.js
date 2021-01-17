import React, { useContext } from 'react';
import './Settings.css';
import { Icon, Form, Button } from 'semantic-ui-react';
import { Link, useHistory } from 'react-router-dom';
import Title from '../Title/Title.js';
import DayOrNight from '../DayOrNight/DayOrNight.js';
import BackgroundContext from '../../context/background-context';

function Settings() {
  const {theme, updateName, resetName} = useContext(BackgroundContext);

  const history = useHistory();

  const routeReset = () =>{
    let path = '/';
    resetName()
    history.push(path);
  }

  const routeUpdate = () =>{
    let path = '/';
    updateName()
    history.push(path);
  }

  return (
    <div className='mainContainerSettings' style={{ background: theme.background, color: theme.foreground }}>
      <div className='toHome'>
        <Link to='/'>
          <Icon name='angle left' size='big'/>
        </Link>
      </div>
      <div className='subContainerSettings'>
        <Title title='Paramètres'/>
        <DayOrNight/>
        <h1>Tu n'aimes pas mon nom ? Change le !</h1>
        <div className='settingsForm'>
          <Form>
            <Form.Field>
              <h5>Nom</h5>
              <input placeholder='Nom'/>
            </Form.Field>
            <Button type='submit' onClick={routeUpdate}>Envoyer</Button>
            <Button type='reset' onClick={routeReset}>Reset</Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Settings;