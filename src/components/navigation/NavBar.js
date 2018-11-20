import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
    <Menu size="large" id="topNav">
        <div id='navLinksContainer'>
            <Menu.Header id="giphylookup">
                GIPHY Lookup
        </Menu.Header>
            <Menu.Item className="menuItem" as={Link} to="/">
                Home
        </Menu.Item>
            <Menu.Item className="menuItem" as={Link} to="/favorites">
                Favorites
        </Menu.Item>
        </div>
    </Menu>
);

export default NavBar;