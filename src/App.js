import Header from './Header';
import Weather from './Weather';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import icons from './Icons';

export const DateContext = createContext();
export const WeatherContext = createContext();

function App() {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [vent, setWind] = useState("");
  const [image, setImage] = useState("");

  //prochains jours
  const [date, setDate] = useState("");
  const [nextDay, setNextDay] = useState("");
  const [allData, setAllData] = useState("");



  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/forecast?lat=35.6895000&lon=139.6917100&appid=bff008a478a4abdc42c7753f9708894c&units=metric')

      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setCityName(result.city.name);
        setTemperature(result.list[0].main.temp);
        setWind(result.list[0].wind.speed);
        setImage(icons.getIcons(result.list[0].weather[0].main));
        setDate(result.list[0].dt);
        setNextDay([
          result.list[0].dt + 86400,
          result.list[0].dt + (86400 * 2),
          result.list[0].dt + (86400 * 3),
          result.list[0].dt + (86400 * 4),
        ])
        setAllData(result)


      })
  }, []);

  function goNextDay(time) {
    allData.list.forEach(element => {
      if (element.dt == time) {
        setTemperature(element.main.temp);
        setWind(element.wind.speed);
        setImage(icons.getIcons(element.weather[0].main));

      }
    });
  }

  return (
    <DateContext.Provider value={{ date, nextDay, goNextDay }}>
      <WeatherContext.Provider value={{cityName, temperature, vent, image}}>
      <div className="App">
        <Header
        />
        <Weather
          // city={cityName}
          // temp={temperature}
          // vent={vent}
          // image={image}
        />

      </div>
      </WeatherContext.Provider>
    </DateContext.Provider>

  );
}

export default App;

