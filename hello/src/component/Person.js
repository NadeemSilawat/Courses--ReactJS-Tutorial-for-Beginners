import React from 'react'

function Person({person}) {
  return (
    <h2>I am {person.name}.I am {person.age} Years Old. I know {person.skill}</h2>
  )
}

export default Person