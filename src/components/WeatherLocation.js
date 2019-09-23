import React,{Component} from 'react';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import WeatherData from './WeatherData';
import Location from './Location';
import transformWeather from '../services/transformWeather';
import { PropTypes } from 'prop-types';
import { CLOUD, location } from '../constants/weathers';

const data ={
    temperature:5,
    weatherState:CLOUD,
    humidity:10,
    wind:'10 m/s',

}

class WeatherLocation extends Component{
    constructor() {
        super();
          this.state = {
          city: location,
          data: data,  
        };   
      } 
      componentDidMount() {    
        this.handleUpdateClick();   
      }; 
      
    
      handleUpdateClick = () => {   
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then( resolve => {      
          return resolve.json();
        }).then(data => {
          const newWeather = transformWeather(data);       
          this.setState({
            data: newWeather        
          })
    
        });
      };  
    
 render(){
    const { city, data } = this.state
     return(
         <div>
             <h3>
                 <Location city={city}></Location> 
                
             </h3>
              <WeatherData data ={data}></WeatherData>
          </div>
     );
 }
};
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
  }
  

export default WeatherLocation;