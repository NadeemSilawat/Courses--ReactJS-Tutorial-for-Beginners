import React from 'react'
import Person from './Person';

function NameList() {
  const persons = [
    {
        id: 1,
        name: 'Bruce',
        age : 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clark',
        age : 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age : 28,
        skill: 'Vue'
    },
    {
        id: 4,
        name: 'Peter',
        age : 35,
        skill: 'JavaScript'
    }
    
  ]
  
// New Way 
    const PersonList = persons.map((person) => <Person person ={person}/>)

    // const PersonList = persons.map((person)=> <h2>I am {person.name}.I am {person.age} Years Old. I know {person.skill}</h2>)


    // const names = ['Bruce', 'Clark', 'Diana', 'Peter'];
    // const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
  
    return (
    <div>
        {/* {nameList} */}
        {PersonList}
    </div>
    
  )
}

export default NameList