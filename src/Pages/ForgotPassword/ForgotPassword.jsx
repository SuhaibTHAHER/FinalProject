import axios from 'axios'
import React, { useState } from 'react'

function ForgotPassword() {

    const [user, setUser] = useState({
        email: '',
      })
      const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
          ...user, 
          [name]: value
        })
        console.log(user)
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        const formData = new FormData();
        formData.append('email', user.email);
        
          const {data} = await axios.patch(`https://ecommerce-node4-five.vercel.app/auth/sendcode`, formData);
          
            console.log(data)
          }
        return (
          <>
            <form onSubmit={handleSubmit}>
              <label>userEmail</label>
              <input type="email" value={user.email} name='email' onChange={handleChange}/>
              <button>send</button>
            </form>
          </>
        );
}

export default ForgotPassword