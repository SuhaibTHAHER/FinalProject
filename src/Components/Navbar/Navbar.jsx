import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.module.css'
import { UserContext } from '../../assets/Conext/User/User'
import { useNavigate } from 'react-router-dom'
function Navbar() {
  const {userName,setUserName} = useContext(UserContext)
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    setUserName('')
    navigate('/Login')
  }
    return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    S-Shop
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
      <li className="welcome nav-item">
        welcome {userName}
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active icon-link" aria-current="page" to="/Home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/About">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">
          Login
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Register">
         Register
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Profile">
        <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width={256}
  height={256}
  viewBox="0 0 256 256"
  xmlSpace="preserve"
>
  <defs></defs>
  <g
    style={{
      stroke: "none",
      strokeWidth: 0,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10,
      fill: "none",
      fillRule: "nonzero",
      opacity: 1
    }}
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
  >
    <path
      d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 45 22.007 c 8.899 0 16.14 7.241 16.14 16.14 c 0 8.9 -7.241 16.14 -16.14 16.14 c -8.9 0 -16.14 -7.24 -16.14 -16.14 C 28.86 29.248 36.1 22.007 45 22.007 z M 45 83.843 c -11.135 0 -21.123 -4.885 -27.957 -12.623 c 3.177 -5.75 8.144 -10.476 14.05 -13.341 c 2.009 -0.974 4.354 -0.958 6.435 0.041 c 2.343 1.126 4.857 1.696 7.473 1.696 c 2.615 0 5.13 -0.571 7.473 -1.696 c 2.083 -1 4.428 -1.015 6.435 -0.041 c 5.906 2.864 10.872 7.591 14.049 13.341 C 66.123 78.957 56.135 83.843 45 83.843 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
  </g>
</svg>

          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/Cart" style={{position:"relative"}}>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  version="1.1"
  width={256}
  height={256}
  viewBox="0 0 256 256"
  xmlSpace="preserve"
>
  <defs></defs>
  <g
    style={{
      stroke: "none",
      strokeWidth: 0,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeLinejoin: "miter",
      strokeMiterlimit: 10,
      fill: "none",
      fillRule: "nonzero",
      opacity: 1
    }}
    transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
  >
    <path
      d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 h -6.021 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 H 86.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
    <circle
      cx="28.88"
      cy="74.33"
      r="6.16"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform="  matrix(1 0 0 1 0 0) "
    />
    <circle
      cx="74.59"
      cy="74.33"
      r="6.16"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform="  matrix(1 0 0 1 0 0) "
    />
    <path
      d="M 62.278 19.546 H 52.237 V 9.506 c 0 -1.933 -1.567 -3.5 -3.5 -3.5 s -3.5 1.567 -3.5 3.5 v 10.04 h -10.04 c -1.933 0 -3.5 1.567 -3.5 3.5 s 1.567 3.5 3.5 3.5 h 10.04 v 10.04 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -10.04 h 10.041 c 1.933 0 3.5 -1.567 3.5 -3.5 S 64.211 19.546 62.278 19.546 z"
      style={{
        stroke: "none",
        strokeWidth: 1,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "rgb(0,0,0)",
        fillRule: "nonzero",
        opacity: 1
      }}
      transform=" matrix(1 0 0 1 0 0) "
      strokeLinecap="round"
    />
  </g>

</svg>
<div className=' bg-danger d-flex justify-content-center align-items-center' style={{width:"20px",height:"20px",borderRadius:"50%" ,position:"absolute",top:"5px",right:"0"}}>
  3
</div>
          </NavLink>
        </li>

        <li>
        <button onClick={logout} className='btn btn-outline-primary'>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar