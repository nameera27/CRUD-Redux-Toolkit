import React, { useState } from 'react'
import { addUser } from '../features/userDetailSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const users = useSelector((state) => state.users)
    const Dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event)=>{
        event.preventDefault()
        Dispatch(addUser({id: users[users.length - 1].id + 1, name, email,phone }))
        navigate('/home')
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <form className="row g-3" onSubmit={handleSubmit}>
            <button disabled={true} className='btn btn-sm btn-secondary'>Add New User</button>
                <div className="col-md-12">

                    <label htmlFor="inputName4" className="form-label mt-2">Name:</label>
                    <input type="name" name='name' className="form-control" id="inputName4" onChange={e=>setName(e.target.value)} required />

                    <label htmlFor="inputEmail4" className="form-label mt-2">Email:</label>
                    <input type="email" name='email' className="form-control" id="inputEmail4" onChange={e=>setEmail(e.target.value)} required />

                    <label htmlFor="inputPhone4" className="form-label mt-2">Phone</label>
                    <input type="phone" name='phone' className="form-control" id="inputPhone4" onChange={e=>setPhone(e.target.value)} required />
                </div>
                <div className="col-md-6 ">
                    <button className="btn btn-primary">Add User</button>
                </div>
            </form>
        </div>
    )
}
