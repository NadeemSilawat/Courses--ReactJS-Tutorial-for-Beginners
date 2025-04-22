import React, { useState } from 'react';
import Person from './Person';

function NameList() {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React',
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular',
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue',
    },
    {
      id: 4,
      name: 'Peter',
      age: 35,
      skill: 'JavaScript',
    },
  ]);

  // New Way
  const PersonList = persons.map((person) => <Person key ={person.id} person={person} />);

  // const PersonList = persons.map((person)=> <h2>I am {person.name}.I am {person.age} Years Old. I know {person.skill}</h2>)

  // const names = ['Bruce', 'Clark', 'Diana', 'Peter'];
  // const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

  const handleAddList = () => {
    setPersons([
      ...persons,
      {
        id: 5,
        name: 'Tony',
        age: 40,
        skill: 'React Native',
      },
    ])
  };
  const handleUpdateList = () => {
      const newList = persons.map((person) => {
        if(person.id === 2){
          return {
            ...person,
            name: 'Superman',
            age: 26,
            skill: 'Angular 2',
          }
        }else {
          return person 
        }
      })
    setPersons(newList)
  };

  return (
    <div>
      {/* {nameList} */}
      {PersonList}
      <button onClick={handleAddList}>Add List</button>
      <button onClick={handleUpdateList}>Update List</button>
    </div>
  );
}

export default NameList;
