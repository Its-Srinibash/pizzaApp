import React from 'react'
import {Link} from 'react-router-dom'
import banner from '../assets/pzzbg.png'
import '../styles/Home.css'
const Home = () => {
  return (
    <div>
      <div className='home'  style={{backgroundImage:`url(${banner})`}}>
<div className='headerContainer'>
  <h1>Srinu's Pizzeria</h1>
  <p>PIZZA TO FIT ANY TASTE</p>
  <Link to='/menu'> <button>ORDER NOW</button></Link>
 
</div>
      </div>
    </div>
  )
}

export default Home