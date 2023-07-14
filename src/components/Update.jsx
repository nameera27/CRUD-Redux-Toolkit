import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { updateUser } from '../features/userDetailSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email, phone} = existingUser[0];
    const [upname, setName] = useState(name)
    const [upemail, setEmail] = useState(email)
    const [upphone, setPhone] = useState(phone)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) =>{
        event.preventDefault();
        dispatch(updateUser({
            id:id,
            name:upname,
            email:upemail,
            phone:upphone
        }))  
        navigate('/display')
    }

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center'>
                <form className="row g-3" onSubmit={handleUpdate}>
                    <button disabled={true} className='btn btn-sm btn-secondary'>Update User</button>
                    <div className="col-md-12">

                        <label htmlFor="inputName4" className="form-label mt-2">Name:</label>
                        <input type="name" name='name' className="form-control" id="inputName4" value={upname} onChange={e => setName(e.target.value)} required />

                        <label htmlFor="inputEmail4" className="form-label mt-2">Email:</label>
                        <input type="email" name='email' className="form-control" id="inputEmail4" value={upemail} onChange={e => setEmail(e.target.value)} required />

                        <label htmlFor="inputPhone4" className="form-label mt-2">Phone</label>
                        <input type="phone" name='phone' className="form-control" id="inputPhone4" value={upphone} onChange={e => setPhone(e.target.value)} required />
                    </div>
                    <div className="col-md-6 ">
                        <button className="btn btn-primary" >Update User</button>
                    </div>
                </form>
            </div>
        </div>
    )
    }