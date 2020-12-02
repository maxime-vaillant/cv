import React, { useContext } from 'react';
import './Home.css';
import Title from '../Title/Title.js';
import DayOrNight from '../DayOrNight/DayOrNight.js';
import Association from '../Association/Association.js';
import Competence from '../Competence/Competence.js';
import Bottom from '../Bottom/Bottom.js';
import BackgroundContext from '../../context/background-context';
import data from '../../assets/data.json';
import imgIndex from '../../assets/imgIndex.js';

const assos_data = data.Associations;

const compet_data = data.Competences;

const outils_data = data.Outils;


function Home() {
  const {theme} = useContext(BackgroundContext);

  return (
    <div className='mainContainer' style={{ background: theme.background, color: theme.foreground }}>
      <DayOrNight/>
      <div className='subContainerName'>
        <div className='imageContainer'>
          <img className='image' src={imgIndex[0]}/>
        </div>
        <div className='textContainerName'>
          <div className='First'>
            <h1>Maxime</h1>
          </div>
          <div className='Last'>
            <h1>Vaillant</h1>
          </div>
        </div>
      </div>
      <Title title='Associations'/>
      {assos_data.map(item =>
        <Association name={item.name} periode={item.periode} poste={item.poste} details={item.details} photo={imgIndex[item.idPhoto]}/>
      )}
      <Title title='Languages'/>
      {compet_data.map(item =>
        <Competence name={item.name} pourcentage={item.pourcentage} photo={imgIndex[item.idPhoto]}/>
      )}
      <Title title='Outils'/>
      {outils_data.map(item =>
        <Competence name={item.name} pourcentage={item.pourcentage} photo={imgIndex[item.idPhoto]}/>
      )}
      <Bottom/>
    </div>
  );
}

export default Home;
