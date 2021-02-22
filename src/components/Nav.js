import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return(
    <div className='nav'>
      <h3>Store Page</h3>
      <ul>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/deals'>
            Deals
          </NavLink>
        </li>
        <li>
          <NavLink to='/cart'>
            Cart
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;