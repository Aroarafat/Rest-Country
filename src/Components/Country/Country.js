import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    return (
        <div className="country">
            <h4>Country-Name:{name}</h4>
            <img src={flag} alt="" />
            <h4>Capital is:{capital}</h4>
            <h4>Population:{population}</h4>
            <h4>Region:{region}</h4>
        </div>
    );
};

export default Country;