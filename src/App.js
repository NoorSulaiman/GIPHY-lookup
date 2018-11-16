import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import FavoritePage from './components/pages/FavoritePage';
import TopNavigation from './components/navigation/TopNavigation';

const App = () => (
    <div className="ui container">
        <TopNavigation />
        <Route path="/" exact component={HomePage} />
        <Route path="/favorite" component={FavoritePage} />

    </div>
)

export default App;