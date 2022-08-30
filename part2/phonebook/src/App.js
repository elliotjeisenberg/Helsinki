import { useState, useEffect } from 'react';
import axios from 'axios'
import Listing from './components/Listing.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/db')
    .then((res) => {
      setPersons(res.data.persons)
    })
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find(person => person.name === newName)) {
      //Name already exists. Do not create a new entry
      alert(`${newName} is already in the phonebook!`)
    } else {
      //Name does not yet exist. Create new entry
      setPersons(persons.concat({'name':newName,'number':newNumber,'id':persons.length+1}))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Listing people={persons}/>
    </div>
  )
}

export default App;