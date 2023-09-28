import React from 'react'

export default function Props(prop) {
  return (
    <>
        <h1 style={{ color: 'crimson' }}>Task-b</h1>
        <h2>Name : {prop.Name}</h2>
        <img style={{width: '200px'}} src={prop.image} alt='nature'/>
        <h3>Bio : {prop.Bio}</h3>
    </>
  )
}
