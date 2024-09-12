import {useState, useEffect} from 'react'
import axios from 'axios'
import countryService from './services/countries'

const FancyCountry = ({name, setFancyCountry}) => {
  useEffect(()=>{
    if (name){
    countryService
    .getByName(name)
    .then(country =>
      setFancyCountry(country)
    )
  }
  }, [name, setFancyCountry])

  return (
    
    <div>
      Name of country is {name}
    </div>
  )
}

const DisplayFiltered = ({countryNames, setFancyCountry}) => {
  if (countryNames.length === 1) {
    const [country] = countryNames
    return(
    <FancyCountry 
      name={country}
      setFancyCountry={setFancyCountry}
    />
    )
  }
  if (countryNames.length < 10 ) {
  return (
    <div>
      <ul>
        {countryNames.map(country =>
        <li key={country}>
          {country} 
          <button onClick={() => setFancyCountry(country)}> show </button>
        </li> 
    )}
      </ul>
    </div>
  )
}
  
return (
  <div>
    Too many countries
  </div>
)
}


const Filter = ({ filter, handleFilterChange}) => {
  return (
    <div> 
      find countries
        <input
        value={filter}
        onChange={handleFilterChange}>
        </input>
    </div>
  )
}

const App = () => {
  const [filter, setFilter] = useState ('')
  const [countryNames, setCountryNames] = useState ([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [fancyCountry, setFancyCountry] = useState(null)
  

  useEffect(()=> {
    countryService
    .getAll()
    .then(initialCountries => {
      setCountryNames(initialCountries.map(country => country.name.common))
    })
  }, [])

  function handleFilterChange (event) {
    const newFilter = event.target.value
    setFilter(newFilter)
  const filtered = countryNames.filter(country => country.toLowerCase().includes(newFilter.toLowerCase()))

  setFilteredCountries(filtered)
}

return(
  <div>
  <Filter 
  filter={filter}
  handleFilterChange={handleFilterChange}
  />
  <DisplayFiltered 
  countryNames={filteredCountries}
  fancyCountry={fancyCountry}
  setFancyCountry={setFancyCountry}
  />
  {fancyCountry && (
    <div>
      <h2>
        {fancyCountry.name.common}
      </h2>
      <p>Capital {fancyCountry.capital}</p>
      <p>Area {fancyCountry.area} sq km</p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(fancyCountry.languages).map(lang =>
          <li key={lang}> {lang}</li>
        )}
      </ul>
      <img src={fancyCountry.flags.png}></img>
    </div>
  )}
</div>

)
}
export default App
