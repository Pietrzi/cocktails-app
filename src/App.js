import React from 'react';
import './App.css';
import Home from './components/Home';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';
import Cocktails from './components/Cocktails';
import Search from './components/Search';
import Add from './components/Add';
import NotFound from './components/NotFound';
import Cocktail from './components/Cocktail';
//import{ Sibling1, Sibling2 } from './components/Sibling2';
//import Sibling2 from './components/Sibling2';

function App() {
  return (
    <div className="App">   
      <HashRouter> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cocktails/:letter?' component={Cocktails} />
          <Route path='/cocktails/' component={Cocktails} />
          <Route path='/search' component={Search} />
          <Route path='/add' component={Add} />
          <Route path='/cocktail/:id' component={Cocktail} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}


export default App;
