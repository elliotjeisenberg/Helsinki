import axios from 'axios';

function FullDisplay({country}) {
  
    console.log(`https://api.openweathermap.org/data/3.0/onecall?lat=${country.capitalInfo['latlng'][0]}&lon=${country.capitalInfo['latlng'][0]}&appid=${process.env.REACT_APP_API_KEY}`)

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
        </div>
     );
}

export default FullDisplay;