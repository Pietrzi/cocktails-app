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
// import Add from './components/Add';
import NotFound from './components/NotFound';
import Cocktail from './components/Cocktail';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import Register from './components/Register';


function App() {
  return (
    <div className="App">   
      <HashRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/cocktails/:letter?' component={Cocktails} /> */}
          <Route path='/cocktails/' component={Cocktails} />
          <Route path='/search' component={Search} />
          {/* <Route path='/add' component={Add} /> */}
          <Route path='/cocktail/:id' component={Cocktail} />
          <Route path='/login' component={LogIn} />
          <Route path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}


export default App;
