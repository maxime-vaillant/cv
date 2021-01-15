import React, { useState, useContext } from 'react';
import './Home.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Title from '../Title/Title.js';
import DayOrNight from '../DayOrNight/DayOrNight.js';
import Association from '../Association/Association.js';
import Competence from '../Competence/Competence.js';
import Lettre from '../Lettre/Lettre.js';
import Bottom from '../Bottom/Bottom.js';
import BackgroundContext from '../../context/background-context';
import data from '../../assets/data.json';
import imgIndex from '../../assets/imgIndex.js';

const assos_data = data.Associations;

const compet_data = data.Competences;

const outils_data = data.Outils;


function Home() {
  const {theme, prenom, nom} = useContext(BackgroundContext);
  const [color, setColor] = useState(-1);

  const colorName = ['pink', 'yellow', 'brown', 'green'];

  function handleClick(){
    if (color >= 4) {
      setColor(0)
    } else {
      setColor(color + 1)
    }
  }

  return (
    <div className='mainContainerHome' style={{ background: theme.background, color: theme.foreground }}>
      <div className='toSettings'>
        <Link to='/settings'>
          <Icon name='setting' size='big'/>
        </Link>
      </div>
      <div className='subContainerName'>
        <div className='imageContainer'>
          <img className='image' src={imgIndex[0]} alt='Me' onClick={() => handleClick()}/>
        </div>
        <div className='textContainerName' style={{ color: colorName[color] }}>
            <h1>{prenom}</h1>
            <h1>{nom}</h1>
        </div>
      </div>
      <Title title='Associations'/>
      {assos_data.map(item =>
        <Association key={item.id} name={item.name} periode={item.periode} poste={item.poste} details={item.details} photo={imgIndex[item.idPhoto]}/>
      )}
      <Title title='Langages'/>
      {compet_data.map(item =>
        <Competence key={item.id} name={item.name} pourcentage={item.pourcentage} photo={imgIndex[item.idPhoto]}/>
      )}
      <Title title='Outils'/>
      {outils_data.map(item =>
        <Competence key={item.id} name={item.name} pourcentage={item.pourcentage} photo={imgIndex[item.idPhoto]}/>
      )}
      <Title title='Lettre de Motivation'/>
      <Lettre/>
      <Bottom/>
    </div>
  );
}

export default Home;
