import React from 'react'

const ItemCash = ({url, name, typeEntity, typeEntity2, onClick})=>(
  <li onClick={onClick}>
    <img src={url} alt={name}/>
    <p className="bold span"><span>.</span>{typeEntity}</p>
    <p className="bold span"><span>.</span>{typeEntity2}</p>
  </li>
)

export default ItemCash