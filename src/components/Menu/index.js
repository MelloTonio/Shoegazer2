/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './Menu.css';

import Button from '../Button';
// import ButtonLink from '../ButtonLink'

const Menu = () => (
  <>
    <nav className="Menu">
      <Link>
        <div className="Helper">
          <div>
            <Link to="/">
              <img className="Logo" src={Logo} alt="MelloFlix Logo" />
            </Link>
          </div>
        </div>
      </Link>
      <Button className="button" as={Link} to="/add/video">New Video</Button>
    </nav>
  </>
);

export default Menu;
