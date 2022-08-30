import { useState, useEffect } from 'react';
import axios from 'axios';
import CountryOutput from './components/CountryOutput';

function App() {

  const [country, setCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        setData(res.data)
      })
  },[])
  

  const filterCountries = (arr, sub) => {
    return arr.filter(c => {
      return c.name.common.search(sub) >= 0
    })
  }

  const handleChange = e => {
    setCountry(e.target.value)
    setCountries(filterCountries(data,e.target.value))
  }

 
    return (
      <div className="App">
        <input onChange={handleChange}  value={country}/>
        <CountryOutput countries={countries} handleSelection={ e => setSelected(e.target.value)} />
      </div>
    )
};

export default App;
