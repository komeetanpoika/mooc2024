import { useState } from 'react'
const Person = (props) => {
  return(

<>
  {props.name} {props.number}
</>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState(' ')
  const addPerson = (event) => {
    event.preventDefault()
    const testArray = [...persons.map(person => person.name)]
    console.log(testArray.includes(newName))
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(testArray.includes(newName) === false){
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
    }
    if(testArray.includes(newName)){
      alert(newName +' is already on the list')
    }
  }
  const filterNumbers = (props) => {

  }
  function handleNameChange (event) {
    setNewName(event.target.value)
  }
  function handleNumberChange (event){
    setNewNumber(event.target.value)
  }
  function handleFilterChange (event){
    console.log(event.target.value)
    const newFilter = (event.target.value)
    setFilter(newFilter)
    console.log(filter)

  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown <input
          value={filter}
          onChange={handleFilterChange}
          />
        </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number: <input
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <li key={person.name}>
          <Person 
          name={person.name} 
          number={person.number} 
          />
          </li>

      )}
      </ul>
    </div>
  )

}

export default App