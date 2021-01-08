import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Rankings from './pages/rankings';
import Rules from './pages/rules';
import About from './pages/about';
import Players from './pages/players';
import Clans from './pages/clans';

function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/rankings" exact component={Rankings}/>
      <Route path="/rules" component={Rules}/>
      <Route path="/about" component={About}/> 

      <Route path={`/rankings/players`} exact component={Players}/>
      <Route path={`/rankings/clans`} exact component={Clans}/>
    </Switch>


  );


}

export default Routes;