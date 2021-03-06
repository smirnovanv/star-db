import React from 'react';
import RandomPlanet from '../random-planet';
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className="col-md-6">
                    <PersonDetails />
                </div>
            </div>
        </div>
    );
};

export default App;