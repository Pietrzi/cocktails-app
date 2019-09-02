import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Cocktails App</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/cocktails'>Cocktails</NavLink></li>
          <li><NavLink to='/search'>Search</NavLink></li>
          <li><NavLink to='/login'>Log in</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default withRouter(Navbar)