import { useState, useEffect } from 'react'
import axios from 'axios'

const Person = (props) => {
  return(

<>
  {props.name} {props.number}
</>
  )
}
const Persons = (props) => {
  const persons = props.persons
  console.log(persons)
  return (
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
  )
}
const PersonForm = ({addPerson, newName, setPersons, handleNumberChange, handleNameChange, newNumber}) => {

  return (
    <form onSubmit= {(event)=>{
      addPerson(event)

      }}>
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
  )
}
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  
  const hook = () => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }

  
  useEffect(hook, []) 
 
  function handleNameChange (event) {
    setNewName(event.target.value)
    console.log(newNumber)
  }
  function handleNumberChange (event){
    setNewNumber(event.target.value)
    console.log(newNumber)
  }
  const resetFields = () => {
    setNewName('')
    setNewNumber('')
    
  }
  function addPerson(event) {
    event.preventDefault()
    const testArray = [...persons.map(person => person.name)]
    console.log(testArray.includes(newName))
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(testArray.includes(newName) === false){
      setPersons(persons.concat(personObject))
      resetFields()
      console.log(newNumber)
    }
    if(testArray.includes(newName)){
      alert(newName +' is already on the list')
    }
    console.log(newNumber)
  }
  const [filter, setFilter] = useState(' ')


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
        <PersonForm 
        addPerson={addPerson} 
        dudes={persons} 
        newName={newName} 
        setPersons={setPersons} 
        setNewName={setNewName} 
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        setNewNumber={setNewNumber}
        newNumber={newNumber}
        />
      <h2>Numbers</h2>
        <Persons persons={persons} />
    </div>
  )

}

export default App