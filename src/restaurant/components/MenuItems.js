import React, { useState } from 'react'
import { CardItem } from './CardItem'
import Menu from '../../Menu'
import Navbar from './Navbar'

const MenuItems = () => {

  const categoryList = [...new Set(Menu.map((menuItem) => {
    return menuItem.category
  })), 'Both'];

  const [menuData, setmenuData] = useState(Menu)
  // const [categoryListData, setcategoryListData] = useState(Menu)

  const filterItem = (category) => {
    if(category === 'Both'){
      setmenuData(Menu)
      return;
    }

    const updatedList = Menu.filter((menuItem) => {
      return menuItem.category === category;
    })
    setmenuData(updatedList)
  };



  // console.log(categoryList)
  return (
    <>
      <Navbar filterItem={filterItem} categoryList={categoryList} />

      <div className="container">
        <div className=" container row ">
          <CardItem menuData={menuData} setmenuData={setmenuData} />
        </div>
      </div>
    </>
  )
}

export default MenuItems