import React from 'react';
import Card from '../layout/Card/Card';
import { CardContainer } from './Cards.styles';

const Cards = ({ cities, onClose }) => {
    return (
        <CardContainer>
            {cities && cities.map(city => <Card city={city} key={city.id} id={city.id} onClose={onClose}></Card>)}
        </CardContainer>
    );
}

export default Cards;
