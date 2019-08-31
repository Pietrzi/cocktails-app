import React, { Component } from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/cocktails">Cocktails</Link></li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/add'>Add Cocktail</Link></li>
      </ul>
    )
  }
}

export default withRouter(Home);