import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types'



const WeatherData =({data:{temperature,weatherState,humidity,wind}})=>{
    return(
        <div>
            <WeatherTemperature temperature={temperature} weatherState={weatherState} ></WeatherTemperature>
            <WeatherExtraInfo humidity={humidity}
                        wind={wind}
            ></WeatherExtraInfo>
        </div>
        
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired
    })
  }

export default WeatherData;