import React from 'react'

const ListItems = ({ item }) => {
  return (
    <>
        <li>
            {JSON.stringify(item)}
            
        </li>
        <hr/>
    </>
  )
}

export default ListItems