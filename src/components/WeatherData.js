import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';



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

export default WeatherData;