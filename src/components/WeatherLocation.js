import React, {Component} from 'react';
import Location from './Location';

class WeatherLocation extends Component{
    render(){
        return(
            <div>
                <h3> Weather Location </h3>    
                    <Location></Location>
                    
                    WeatherData                       
               
            </div>
           
        );
    }
};

export default WeatherLocation;