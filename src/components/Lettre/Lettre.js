import React from 'react';
import './Lettre.css';
import data from '../../assets/data.json';

const lettre_data = data.Lettre;

const Lettre = () => {
  return (
    <div className='subContainerLettre'>
      <p>{lettre_data[0].texte_perso}</p>
      <p>{lettre_data[0].texte_collectif}</p>
      <p>{lettre_data[0].blague}</p>
    </div>
  )
}

export default Lettre;
