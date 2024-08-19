import { useState } from 'react'
const Person = ({name}) => {
  return(

<>
  {name}
</>
  )
}
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addPerson = (event) => {
    console.log(persons.includes("Arto Hellas"))
    console.log(persons)
    event.preventDefault()
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }
  function handleNameChange (event) {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person =>
        <li key={person.name}
        ><Person name={person.name} /></li>

      )}
      </ul>
    </div>
  )

}

export default App