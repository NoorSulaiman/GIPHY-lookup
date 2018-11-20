import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FavoritesPage from './components/pages/FavoritesPage';
import NavBar from './components/navigation/NavBar';

const App = () => (
    <>
        <NavBar />
        <div className="ui container">
            <Route path="/" exact component={HomePage} />
            <Route path="/favorites" component={FavoritesPage} />
        </div>
    </>
);

export default App;