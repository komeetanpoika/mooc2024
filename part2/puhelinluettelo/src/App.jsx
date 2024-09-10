import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'
import './index.css'

const RemoveButton = (props) => {
  return(
    <button onClick={()=>(props.removePerson(props.id))}>remove {props.id}</button>
  )
}
const Person = (props) => {
  return(
<>
  {props.name} {props.number} <RemoveButton id={props.id} removePerson={props.removePerson}/>
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
        id={person.id}
        removePerson={()=>props.removePerson(person.id)} 
        />
        </li>

    )}
    </ul>
  )
}
const PersonForm = ({addPerson, newName, handleNumberChange, handleNameChange, newNumber}) => {

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
  const [noteMessage, setNoteMessage] = useState('')


  
  useEffect(()=> {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
  }, []) 
 
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
    const personObject = {
      name: newName,
      number: newNumber
    }
    if(testArray.includes(newName) === false){
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
      })
      resetFields()
      setNoteMessage('Added ' + newName)
      setTimeout (()=>{
        setNoteMessage(null)
      }, 2000)
      console.log(newNumber)
    }
    if(testArray.includes(newName)){
      setNoteMessage(newName +' is already on the list')
      setTimeout (()=>{
        setNoteMessage(null)
      }, 2000)
    }
    console.log(newNumber)
  }
  const removePerson= (id) => {
    if(window.confirm(`delete ${id} ?`)== true){
      console.log('you pressed OK')
      personService
      .removeFromDatabase(id)
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setNoteMessage(newName +' succesfully removed from database')
      setTimeout (()=>{
        setNoteMessage(null)
      }, 2000)
    })  
    }
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
      <Notification message={noteMessage} />
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
        <Persons persons={persons} removePerson={removePerson} />
    </div>
  )

}

export default App