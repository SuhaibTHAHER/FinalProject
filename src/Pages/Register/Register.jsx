import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
const navigator = useNavigate()
const [isLoading, setIsLoading] = useState(false)
const [user, setUser] = useState({
  userName: '',
  email: '',
  password: '',
  image: '',
})
const handleChange = (e) => {
  const {name, value} = e.target
  setUser({
    ...user, 
    [name]: value
  })
  console.log(user)
}
const handleImageChange = (e) => {
  const {name, files} = e.target;
  setUser({
    ...user, 
    [name]: files[0],
  });
}
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true)
  console.log(user);
  const formData = new FormData();
  formData.append('image', user.image);
  formData.append('userName', user.userName);
  formData.append('email', user.email);
  formData.append('password', user.password);
  try{
    const {data} = await axios.post(`https://ecommerce-node4-five.vercel.app/auth/signup`, formData);
    console.log(data);
    if (data.message=='success') {
      navigator("/login")
    }
  }catch(error){
    console.log(error.message);
  }finally{
    setIsLoading(false)
  }
                                 
  
}


return (
  <>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      User Name
    </label>
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      value={user.userName} 
      name='userName' 
      onChange={handleChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      User  Email
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputPassword1"
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


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      User Image
    </label>
    <input
      type="file"
      className="form-control"
      id="exampleInputPassword1"
      name='image' 
      onChange={handleImageChange}/>
  </div>
  

  <button className='btn btn-primary' type="submit" disabled={isLoading? 'disabled' : null}>
      {!isLoading ? "Register" : "Loading..."}
    </button>
</form>
  
 

    </>
  )
  }

export default Register









