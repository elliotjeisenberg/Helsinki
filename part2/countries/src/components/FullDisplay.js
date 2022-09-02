import { useState, useEffect } from 'react'
import axios from 'axios';

function FullDisplay({country}) {
  
    const [weather, setWeather] = useState({})

    useEffect(() => {
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo['latlng'][0]}&lon=${country.capitalInfo['latlng'][1]}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setWeather({
                "temperature": (((res.data.main.temp - 273.15)*1.8)+32).toFixed(2),
                "wind": res.data.wind.speed
            })
            console.log(res)
        })
    }, [])

    let languages = []
    Object.values(country.languages).forEach(val => languages.push(val))
    return ( 
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <h3>Languages</h3>
            <ul>
                {languages.map(lang => {
                    return <li key={lang}>{lang}</li>
                })}
            </ul>
            <img src={country.coatOfArms['png']} width="200px"/>
            <h3>Weather In {country.capital[0]}</h3>
            <p>temperature: {weather['temperature']} degrees Farenheight</p>
            <p>wind: {weather['wind']} m/s</p>
        </div>
     );
}

export default FullDisplay;