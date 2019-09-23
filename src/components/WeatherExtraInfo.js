import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind}) => {

    return(
        <div> 
            <span>{`humidity: ${humidity}% `}</span>
            <span>{`wind: ${wind}m/s`}</span>
        </div>
    );
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind : PropTypes.string,
  };
  
export default WeatherExtraInfo;