import React  , {useContext, useState} from 'react'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../assets/Conext/User/User';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
function Login() {
  const Navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
 const handleChange = (e) => {
   const {name, value} = e.target
   setUser({
     ...user, 
     [name]: value
   })
 }
 const handleSubmit = async (e) => {
   e.preventDefault()
   setIsLoading(true)
   console.log(user)
   try{
   const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signin`, user);
   console.log(data)
   if (data.message=='success') {
    localStorage.setItem("token",data.token)
    
    Navigate ('/home')
    toast.success('Welcome', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      
   }
  }catch(error){
    console.log(error)
    toast.error('Error', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
  }finally{
    setIsLoading(false)
  }
  
 }
  return (
    <>
    
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={user.email}
       name='email' 
       onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      value={user.password}
       name='password'
        onChange={handleChange}/>
  </div>

  <button className='btn btn-primary' type="submit" disabled={isLoading? 'disabled' : null}>
      {!isLoading ? "Login" : "Loading..."}
    </button>
</form>

   

   

      <NavLink className="nav-link" to="/ForgotPassword">
          ForgotPassword?
          </NavLink>

    </>
  )
}

export default Login