import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (    //onChange is a prop that gets passed in which is a function under name handleChange.
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}>     
    </input>
);
