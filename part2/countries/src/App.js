import React, { useState, useEffect, StrictMode } from 'react';
import axios from 'axios';
import Display from './components/Display'


const Search = (props) => {
  return <div>find countries <input onChange={props.onInputChange} value={props.search} /></div>
}

function App() {

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => {
      setData(res.data)
    })
  },[])

  const handleInputChange = (e) => {
    setSearch(e.target.value.toUpperCase())
    setCountries(findCountries(data,e.target.value.toUpperCase()))
  }

  const stringMatch = (str, sear) => {
    return str.toUpperCase().search(sear.toUpperCase()) >= 0 ? true : false
  }

  const findCountries = (arr, str) => {
    return (
      arr.filter((country) => {
        return stringMatch(country.name.common, str)
      })
    )
  }

  const selectCountry = (e) => {
    setCountries(e)
  }

  console.log(process.env.REACT_APP_TITLE)

  return ( 
    <div>
      <Search onInputChange={handleInputChange} search={search} />
      <button onClick={() => setCountries(Array(0))}>reset</button>
      <Display selectCountry={selectCountry} countries={countries} />
    </div>
   );
}

export default App;