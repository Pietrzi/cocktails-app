import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import M from 'materialize-css';
import 'materialize-css';

class Navbar extends React.Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "right",
        inDuration: 250
    });
}
  render() {
    return (
      <div>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link className="brand-logo left" to="/">Cocktails App</Link>
          <ul className="right hide-on-med-and-down">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/cocktails'>Cocktails</NavLink></li>
            <li><NavLink to='/search'>Search</NavLink></li>
            <li><NavLink to='/login'>Log in</NavLink></li>
          </ul>
          <a href="#" className="right sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav> 
  
      <ul className="sidenav red darken-3" id="mobile-links">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to='/cocktails'>Cocktails</NavLink></li>
        <li><NavLink to='/search'>Search</NavLink></li>
        <li><NavLink to='/login'>Log in</NavLink></li>
      </ul>
      </div>
    )
  }
  
}

export default withRouter(Navbar);