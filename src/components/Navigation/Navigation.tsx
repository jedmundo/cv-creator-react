
import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes.constants';
import './Navigation.scss';

class Navigation extends Component {

  public render() {
    return (
      <div className="navigation-bar">
          <button>
            <Link to={ROUTES.HOME}>Home</Link>
          </button>
          <button>
            <Link to={ROUTES.LOGIN}>Login</Link>
          </button>
      </div>
    )
  }
};

export default Navigation;
