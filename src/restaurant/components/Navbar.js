import React from 'react'
import '../index.css'

const Navbar = ({filterItem,categoryList}) => {
    // const 
  return (
    <>
    <div>
        <ul className="navigation  ">

          {categoryList.map((category)=>{

          return <a key={category} onClick={() => filterItem(category)}><li>{category}</li></a>
          })}

          
          {/* <button onClick={() => filterItem('veg')}><li>Veg</li></button>
          <button onClick={() => filterItem('non-veg')}><li>Non-Veg</li></button>
          <button onClick={() => {}}><li>both</li></button> */}

        </ul>
      </div>
    </>
  )
}

export default Navbar