import { useState, useEffect } from 'react';
import FullDisplay from "./FullDisplay";

let ListDisplay = ({countries, selectCountry}) => {
    return (
        <div>
            {
            countries.map(country => {
                return <div key={country.name.common}>{country.name.common} <button onClick={() => selectCountry(Array(0).concat(country))}>more info</button></div>
            })
            }
        </div>
    )
}



function Display({countries, selectCountry}) {

    let output = <p>Enter search criteria to see a value</p>
    if (countries.length <= 10 & countries.length > 1) {
        output = <ListDisplay selectCountry={selectCountry} countries={countries} />
    } else if (countries.length === 1) {
        output = <FullDisplay country={countries[0]}/>
    }
    return ( 
        <div>
            {output}
        </div>
     );
}

export default Display;