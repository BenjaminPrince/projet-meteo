import React from "react";
import Days from "./Days";


function Weather(props) {

    return (

        <div className="row">
            <div className="col s12 m6 push-m3">
                <div className="weather card blue-grey darken-1">


                    <div className="card-content white-text">
                        <span className="card-title">{props.city}</span>
                        <p>
                            <img src={props.image} />
                        </p>

                        <span className="temperature">{props.temp}°</span>
                        <div className="wind">{props.vent}</div>
                    </div>
                    <Days 
                        date={props.date}
                        goNextDay={props.goNextDay}
                        nextDay={props.nextDay}

                    />
                </div>
            </div>
        </div>
    );
}

export default Weather;