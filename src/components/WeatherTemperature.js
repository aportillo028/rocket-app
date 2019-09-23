import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons={
    cloud: "day-cloudy-high",
    cloudy:"day-cloudy",
    sun: "day-sunny",
    rain:"day-rain",
    snow:"day-snow",
    windy:"day-windy",
    fog:"day-fog"
};


const getWeatherIcon=weatherstate=>{
    const icon= icons[weatherstate];
    const sizeIcon="4x"
    if(icon)
        return<WeatherIcons className="wicon" name={icon} size={sizeIcon}></WeatherIcons>
    else
        return<WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}></WeatherIcons>
}

const WeatherTemperature =({temperature,weatherState})=>{

    return(
        <div>
           {getWeatherIcon(weatherState)}
            <span>{`${temperature}  C°`}</span>
        </div>
    );
};

WeatherTemperature.protoTypes = {
    temperature : PropTypes.number.isRequired,
    weatherstate : PropTypes.string.isRequired,
};
export default WeatherTemperature;