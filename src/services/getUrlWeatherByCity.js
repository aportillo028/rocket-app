import {url_base_weather,api_key } from '../constants/api_configurations'

const getUrlWeatherByCity = city =>{
    return `${url_base_weather}?q=${city}&appid=${api_key}&units=metrics`;
};

export default getUrlWeatherByCity;