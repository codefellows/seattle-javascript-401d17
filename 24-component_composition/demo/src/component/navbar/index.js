import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <h1>Budget Tracker App</h1>
        <nav>
          <ul>
            <li><Link to='/'>Dashboard</Link></li>
            <li><Link to='/about'>About Me</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Navbar;
