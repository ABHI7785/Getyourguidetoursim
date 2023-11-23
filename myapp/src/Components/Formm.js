import React from 'react'
import img1 from './images/1000.jpg'

const Formm = () => {
  return (
    <div className='col-12' style={{display:'flex'}}>
       

        <div className='col-6'>
            <img src={img1} alt=''></img>



        </div>
        <div className='col-6'>
        <h2>Your travel journey starts here</h2>
        <h4>Sign up now for travel tips, personalized itineraries, and vacation <br></br>inspiration straight to your inbox.</h4>
            <div className='sign-sec'>
          <input type='text' placeholder='Email Address' />
          <button>Sign Up</button>
        </div>

        </div>

    </div>
  )
}

export default Formm