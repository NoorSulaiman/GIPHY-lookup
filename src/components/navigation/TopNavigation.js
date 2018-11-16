import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './TopNavigation.css'

const items = [
    { key: 'home', id: 'homeLink', name: 'Home', as: Link, to: "/" },
    { key: 'favorite', id: 'favoriteLink', name: 'favorite', as: Link, to: "/favorite" },
]

const TopNavigation = () => <Menu size="big" inverted id="topNav" items={items} />


export default TopNavigation;