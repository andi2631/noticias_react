import React from 'react'

const Country = ({guardarPais, pais}) => {   

  return (
      
    <div>
        <select
        onChange={e => guardarPais(e.target.value)}
        className="browser-default"
        value = {pais}
        >
        <option> Brasil </option>
        <option> Mexico </option>
        <option> Estados Unidos </option>
        </select>
    </div>
  )
}

export default Country