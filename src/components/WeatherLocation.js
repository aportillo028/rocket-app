import React,{Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
const SUN ='SUN';

const data ={
    temperature: 28,
    weatherState : SUN,
    humidity : 65,
    wind: 12
}
class WeatherLocation extends Component{
 render(){
     return(
         <div>
             <h3>
                 <Location city={"San Salvador"}></Location> 
                
             </h3>
              <WeatherData data ={data}></WeatherData>
          </div>
     );
 }
};

export default WeatherLocation;