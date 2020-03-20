import React from 'react';
import './search-box.styles.css';

export const SearchBox = props => (
    <input
        type="search"
        placeholder={props.placeHolder}
        onChange={props.changeHandler}
    />
)

/*
//Below produces the same output, it's just another way 
//to write the component with the parameters
//explicitly defined instead of accessed via the props.
//Not sure which one I like yet... 
export const SearchBox = ({placeHolder, changeHandler}) => (

    <input 
        type="search" 
        placeholder={placeHolder} 
        onChange={changeHandler}
    />

)
*/