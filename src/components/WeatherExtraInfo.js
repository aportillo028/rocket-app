import React from 'react';

const WeatherExtraInfo = ({humidity,wind}) => {

    return(
        <div> 
            <span>{`humidity: ${humidity}% `}</span>
            <span>{`wind: ${wind}m/s`}</span>
        </div>
    );
};

export default WeatherExtraInfo;