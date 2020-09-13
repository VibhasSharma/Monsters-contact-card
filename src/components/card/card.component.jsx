import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    <div className='card-container'>
        <img alt='contact' src={`https://robohash.org/${props.contact.id}?set=set2&size=160x180`}/>
        <h2>{props.contact.name}</h2>
        <h4>{props.contact.email}</h4>
    </div>   
)
    

