import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <div className='nav'>
      <h3>Store Page</h3>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName='active' style={{textDecoration: 'none', paddingLeft: 14}}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/deals' activeClassName='active' style={{textDecoration: 'none', paddingLeft: 14}}>
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart' activeClassName='active' style={{textDecoration: 'none', paddingLeft: 14}}>
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;