import Storm from "./icons/storm.svg";
import Cloudy from "./icons/cloudy.svg";
import Rainy from "./icons/rainy.svg";
import Snowy from "./icons/snowy.svg";
import Sun from "./icons/sun.svg";
import Thunder from "./icons/thunder.svg";
import Windy from "./icons/windy.svg";
import CloudySun from "./icons/cloudy-sun.svg";



class Icons {

    static weatherIcon = {

        "Thunderstorm": Storm,
        "Clouds": Cloudy,
        "Rain": Rainy,
        "Snow": Snowy,
        "Clear": Sun,
        "Thunderstorm": Thunder,
        "Clouds": Windy,
        "Clouds": CloudySun,

    }
    static getIcons(Name) {
        return this.weatherIcon[Name]
    }
    
}

export default Icons;

