import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './components/Home/Home.js';
import NotFound from './components/NotFound/NotFound.js';
import Settings from './components/Settings/Settings.js';
import BackgroundContext from './context/background-context.js';
import Themes from './context/Themes.js';

function App() {
  const [theme, setTheme] = useState(Themes.light)
  const [prenom, setPrenom] = useState('Maxime')
  const [nom, setNom] = useState('Vaillant')
  const newPrenom = ['Beau', 'Mister', 'Le meilleur', 'Genre tu aimes', 'Pic pic', 'Clique', 'BG']
  const newNom = ['Gosse', 'Univers', 'du Picasso', 'pas mon nom', 'pic pic pic', 'sur ma photo', 'du 44']

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function updateThemeLight() {
    setTheme(Themes.light)
  }

  function updateThemeDark() {
    setTheme(Themes.dark)
  }

  function updateName() {
    const  random = getRandomInt(7)
    setPrenom(newPrenom[random])
    setNom(newNom[random])
  }

  function resetName() {
    setPrenom('Maxime')
    setNom('Vaillant')
  }

  return (
    <BrowserRouter basename='/cv'>
            <React.Suspense fallback={<div>{'loading'}</div>}>
              <BackgroundContext.Provider value={{ theme, updateThemeLight, updateThemeDark, prenom, nom, updateName, resetName }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/settings" exact component={Settings} />
                    <Route component={NotFound} />
                </Switch>
              </BackgroundContext.Provider>
            </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
