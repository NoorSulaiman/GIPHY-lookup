import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App = () => (
    <div className="ui container">
        <Route path="/" exact component={HomePage} />
    </div>
)

export default App;