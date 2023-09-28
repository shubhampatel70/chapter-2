import React from 'react'
import TextCard from './TextCard'
import ImageCard from './ImageCard'

export default function Cardss() {
  return (
    <>
    <h1 style={{color : 'crimson'}}>Task-g</h1>
    <div style={{ display :'flex', justifyContent: 'center'}}>
      <div style={{width : '200px', justifyContent : 'center', alignItems : 'center', backgroundColor : 'lightgray', padding : '1rem'}}>
        <ImageCard Image = 'https://i.pinimg.com/564x/3e/42/d2/3e42d2fb3019006f2527a3754c63f1a9.jpg' alt = 'Nature photo'/>
        <TextCard Title = 'hello' Text = 'hello there, i am greatful its work'/>
      </div>
    </div>
    </>
  )
}
