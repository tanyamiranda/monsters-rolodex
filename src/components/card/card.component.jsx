import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <center>
            <img alt='monster' src={'https://robohash.org/' + props.monster.id + '?set=set2'} />    
            <div><strong>{props.monster.name}</strong></div>
            <div>{props.monster.profession}</div>
            <div>{props.monster.email}</div>
            <div>{props.monster.phone}</div>
        </center>
    </div>
)