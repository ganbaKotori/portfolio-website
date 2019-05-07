import React from 'react';
import { Switch, Route,   BrowserRouter } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  
    <Switch>
      <Route exact path={'/'} component={LandingPage} />
      <Route exact path={'/aboutme'} component={AboutMe} />
      <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
    
  )
  
  export default Main;