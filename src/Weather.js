import React, { useContext } from "react";
import { WeatherContext } from "./App";
import Days from "./Days";


function Weather() {

    const weather= useContext(WeatherContext)

    return (

        <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">


                    <div className="card-content white-text">
                        <span className="card-title">{weather.cityName}</span>
                        <p>
                            <img src={weather.image} />
                        </p>

                        <span className="temperature">{weather.temperature}°</span>
                        <div className="wind">{weather.vent}</div>
                    </div>
                    <Days 
                       
                    />
                </div>
            </div>
        </div>
    );
}

export default Weather;