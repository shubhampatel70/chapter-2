import React from 'react'

export default function ImageCard(prop) {
  return (
    <div>
        <img style={{width : '100%'}} src={prop.Image} alt={prop.alt}/>
    </div>
  )
}
