import './App.css';
import Inputs from './Component/Inputs';
import Details from './Component/Details';
import TimeLocation from './Component/TimeLocation';
import Forecast from './Component/Forecast';
import getFormattedWeatherData from './Services/weatherService';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState({q: "casablanca"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);


  const getWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then( data => {
        setWeather(data);
        console.log(data)
      })
  }
  useEffect(() => {getWeather()}, [query, units])
  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to blue-700";
    if (weather.details == "Clouds"){
      return "bg-gradient-to-t from-gray-600 to-gray-500";
    } else if (weather.details == "Rain"){
      return "bg-gradient-to-br from-slate-700 to-slate-600";
    } else if (weather.details == "Clear"){
      return "bg-gradient-to-tr from-sky-600 to-orange-300";
    };
  }
  const formatWeather = () => {
    if (weather.details == "Clear" || weather.details == "Clouds"){
      return "";
    } else if (weather.details == "Rain"){
      return "rain";
    } else if (weather.details == "Snow"){
      return "snow";
  }};
  return (
      <div className={`relative mx-auto max-w-screen-lg mt-4 py-2 px-32 
      shadow-xl shadow-gray-400 transition-all ${formatBackground()} duration-300 ease-in-out`}>
        <div className={`${formatWeather()}`}>
          {weather && (
            <>
              <Inputs setQuery={setQuery} setUnits={setUnits}/>
              <TimeLocation weather={weather}/>
              <Details weather={weather} units={units}/>
              <Forecast title="3 hour step forecast" data={weather.hourly}/>
              <Forecast title="daily forecast" data={weather.daily}/>
            </>
          )}
        </div>
      </div>
  );
}

export default App;
