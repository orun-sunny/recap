import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,capital,population,region} = props.country



    console.log(props.country)
    return (
        <div className='country'>
            <h1>this is {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>capital is: {capital} </p>
            <small>Region:{region} </small>
            <p>population: {population} </p>

        </div>
    );
};

export default Country;