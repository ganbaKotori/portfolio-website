import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
      <Route ></Route>
      <Route path={process.env.PUBLIC_URL + '/aboutme'} component={AboutMe} />
      <Route path={process.env.PUBLIC_URL + '/contact'}component={Contact} />
      <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
      <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
    </Switch>
  )
  
  export default Main;