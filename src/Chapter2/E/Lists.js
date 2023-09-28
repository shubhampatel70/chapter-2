import React from 'react'

export default function Lists() {

    const Names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan"];

    const listNames = Names.map ((Name) =>
        <li key={Name.toString()}>{Name}</li>
    );

  return (
    <>
        <h1 style={{ color: 'crimson'}}>Task-e</h1>
        <ul>
            {listNames}
        </ul>
    </>
  )
}
