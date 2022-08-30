import Country from './Country'

function CountryOutput(props) {
    console.log(props.countries)

    if (props.countries.length > 10) {
        return (
            <div>
                <p>You are matching only {props.countries.length}. Make your search more specific to see results</p>
            </div>
        )
    }
    else {
        return (
            <div>
                {
                props.countries.map((country) => {
                    return <><p>{Country.name.common}</p><button key={country.name.official}>{country.name.common}</button></>
                },[])
            }
            </div>
        )
    }
}

export default CountryOutput;