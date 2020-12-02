import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Home from './components/Home/Home.js';
import NotFound from './components/NotFound/NotFound.js';
import BackgroundContext from './context/background-context.js';
import Themes from './context/Themes.js';

function App() {
  const [theme, setTheme] = useState(Themes.light)

  function updateThemeLight() {
    setTheme(Themes.light)
  }
  function updateThemeDark() {
    setTheme(Themes.dark)
  }

  return (
    <BrowserRouter basename='/cv'>
            <React.Suspense fallback={<div>{'loading'}</div>}>
              <BackgroundContext.Provider value={{ theme, updateThemeLight, updateThemeDark }}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>
              </BackgroundContext.Provider>
            </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
