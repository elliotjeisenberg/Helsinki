import React from 'react'

const Person = ({name,number}) => {
  return (
    <div>Name:{name} Number:{number}</div>
  )
}


const Listing = ({people}) => {
    const list = people.map(person => {
        return <Person name={person.name} number={person.number} key={person.id} />
    } )
  return (
    <div>
        {list}
    </div>
  )
}

export default Listing;