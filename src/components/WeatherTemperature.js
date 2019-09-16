import React from 'react';

const WeatherTemperature =({temperature,weatherState})=>{

    return(
        <div>
            <span>{`${weatherState}  `}</span>
            <span>{`${temperature}  C`}</span>
        </div>
    );
};

export default WeatherTemperature;