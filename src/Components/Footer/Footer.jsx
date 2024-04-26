import React from 'react'
import * as styles from './Footer.module.css'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='Footer card-footer' style={{backgroundColor: '#c1c1c1' , width: '100%' , top: '0'}}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <Link className="nav-link active" aria-current="page" to="/Home">
            Home
          </Link>
          <Link className="nav-link active" aria-current="page" to="/about">
            About
          </Link>
      </nav>
      <p className= 'navbar navbar-expand-lg bg-body-tertiary' >all copyrights reserved for S-Shop ©</p>
    </div>
  )
}

export default Footer