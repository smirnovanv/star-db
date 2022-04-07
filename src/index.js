import React from 'react';
import ReactDOM from 'react-dom';
import SwapiService from './services/swapi-service';

import App from './components/app'

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
    people.forEach((p) => {
        console.log(p.name);
    });
});



ReactDOM.render(<App />, document.getElementById('root'));