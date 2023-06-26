import React from 'react'
import PizzaLeft from'../assets/pizzaLeft.jpg'
import '../styles/contact.css'
const contact = () => {
  return (
    <div className='contact'>
        <div className='leftSide'style={{
        backgroundImage:`url(${PizzaLeft})`
      }}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='post'>
                <label htmlFor='name'>FullName</label>
                <input name='name' placeholder='Enter Name' type='text'/>
                <label htmlFor='name'>Email</label>
                <input email='email' placeholder='Enter email' type='email'/>
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter message' name='message' required></textarea>
                <button type='submit'>Send Message</button>
            </form>
        </div>
    </div>
  )
}

export default contact