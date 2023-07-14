import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container my-4'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <a className="navbar-brand" href={'/'}>CRUD Operation using React-Redux Toolkit <br /> <small>by nameera patel</small></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
          </div>
          <Link to='/' className='btn btn-success my-4 mx-2'>Home</Link>
          <Link to='/create' className='btn btn-success my-4'>Add User +</Link>
        </div>
      </nav>
    </div>
  )
}
