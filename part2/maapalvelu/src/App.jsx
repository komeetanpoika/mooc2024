import {useState, useEffect} from 'react'
import axios from 'axios'
import countryService from './services/countries'

const FancyCountry = (props) => {
  const name = props.name
  useEffect(()=>{
    countryService
    .getByName(name)
    .then(country =>
      props.setFancyCountry(country)
    )
  }, [])
  console.log(props.fancyCountry)
  return (
    
    <div>
      Name of country is {props.fancyCountry}
    </div>
  )
}

const DisplayFiltered = (props) => {
  const countries = props.countryNames
  if (countries.length === 1) {
    console.log(countries)
    return(
    <FancyCountry 
    name={countries}
    setFancyCountry={props.setFancyCountry}
    />
    )
  }
  if (countries.length < 10 ){
  return (
    <div>
      <ul>
        {countries.map(country =>
        <li key={country}>
          {country}
        </li>
    )}
      </ul>
    </div>
  )
}
  
  if (countries.length > 9) {
return (
  <div>
    too maney countries
  </div>
)
}
}

const Filter = (props) => {
  return (
    <div> 
      find countries
        <input
        value={props.filter}
        onChange={props.handleFilterChange}>
        </input>
    </div>
  )
}

const App = () => {
  const [filter, setFilter] = useState ('')
  const [countryNames, setCountryNames] = useState ([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [fancyCountry, setFancyCountry] = useState([])
  
    


  useEffect(()=> {
    countryService
    .getAll()
    .then(initialCountries => {
      setCountryNames(initialCountries.map(initialCountries => initialCountries.name.common))
    })
  }, [])

  function handleFilterChange (event) {
    const newFilter = event.target.value
    setFilter(newFilter)
  const filteredCountries = countryNames.filter(country => country.toLowerCase().includes(filter.toLowerCase()))
  console.log(filteredCountries)
  setFilteredCountries([...filteredCountries])
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
</div>

)
}
export default App
