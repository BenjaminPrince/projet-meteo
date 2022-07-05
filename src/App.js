import Header from './Header';
import Weather from './Weather';
import './App.css';
import { useEffect, useState } from 'react';
import icons from './Logo';

function App() {
  const [cityName, setCityName] = useState("");
  const [temperature, setTemperature] = useState("");
  const [vent, setWind] = useState("");
  const [image,setImage] = useState("");

  useEffect(() => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=35.6895000&lon=139.6917100&appid=bff008a478a4abdc42c7753f9708894c&units=metric')

      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setCityName(result.name);
        setTemperature(result.main.temp);
        setWind(result.wind.speed);
        setImage(icons.getIcons(result.weather[0].main));
      })
  });

  return (
    <div className="App">
      <Header 
      />
      <Weather
        city={cityName}
        temp={temperature}
        vent={vent}
        image={image}
      />
     
    </div>
  );
}

export default App;

