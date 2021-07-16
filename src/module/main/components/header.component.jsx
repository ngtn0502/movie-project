import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.styles.scss"

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/' activeClassName="nav-link-active" exact={true}>
                Home <span className='sr-only'>(current)</span>
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/sign-in' activeClassName="nav-link-active">
                Sign In
              </NavLink>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                to='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Dropdown
              </a>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <a className='dropdown-item' to='#'>
                  Action
                </a>
                <a className='dropdown-item' to='#'>
                  Another action
                </a>
                <div className='dropdown-divider' />
                <a className='dropdown-item' to='#'>
                  Something else here
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link disabled'
                to='#'
                tabIndex={-1}
                aria-disabled='true'
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
