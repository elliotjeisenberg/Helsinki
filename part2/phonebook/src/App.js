import { useState, useEffect } from 'react';
import axios from 'axios'
import Listing from './components/Listing.js'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    personService.getAll()
    .then((people) => {
      setPersons(people)
    })
  }, [])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find(person => person.name === newName)) {
      //Name already exists. Do not create a new entry
      if (window.confirm(`${newName} is already in the phonebook. Would you like to override their number?`)) {
        const person = persons.filter(person => person.name === newName )[0]
        const newPerson = {...person, number:newNumber}
        console.log(newPerson)
        personService.update(newPerson)
        .then( () => {
          personService.getAll().then(people => {
            console.log('getAll returned')
            setPersons(people)
          })
        }
        )
      }
    } else {
      //Name does not yet exist. Create new entry

      personService.create({'name':newName,'number':newNumber})
        .then( newPerson => {
          console.log(newPerson)
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch( err => console.log(err) )
    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Do you really want to delete ${name} from the phonebook?`)){
        personService.deletePerson(id)
        .then( () => {
          personService.getAll().then( people => {
            setPersons(people)
          })
    })
      }
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
      <Listing handleDelete={handleDelete} people={persons}/>
    </div>
  )
}

export default App;