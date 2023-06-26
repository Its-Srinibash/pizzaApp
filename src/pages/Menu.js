import React from 'react'
import {MenuList} from '../helpers/menuList.js'
import '../styles/Menu.css'
const Menu = () => {
  return (
    <div className='menu'>
       <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
        {MenuList.map(({ image, name, price }) => {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>₹{price}</p>
    </div>
  );
})}



        </div>
    </div>
  )
}

export default Menu