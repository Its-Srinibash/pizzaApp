import React from 'react'
import MultiplePizza from '../assets/multiplePizzas.jpeg'
import '../styles/about.css'
const about = () => {
  return (
    <div className='about'>
      <div className='aboutTop' style={{
        backgroundImage:`url(${MultiplePizza})`
      }}></div>
      <div className='aboutBottom'>
        <h3>ABOUT US</h3>
        <p>
        Welcome to Srinu's Pizza, where we celebrate the art of pizza-making with a twist of creativity! We believe that pizza is more than just a delicious meal; it's a canvas for culinary exploration. Our skilled chefs blend traditional flavors with innovative ingredients to create mouthwatering masterpieces that will tantalize your taste buds.

At Srinu's Pizza, we pride ourselves on our commitment to quality. Each pizza is crafted with the freshest, locally sourced ingredients, ensuring that every bite bursts with flavor. From classic favorites like Pepperoni and Margherita to unique creations like the PedroTech Special and Vegan options, our menu offers something for every palate.

Join us on this gastronomic adventure and experience the joy of savoring our pizzas that are made with passion, skill, and a sprinkle of randomness. Come discover the unexpected at Srinu's Pizza today!
        </p>
      </div>
    </div>
  )
}

export default about