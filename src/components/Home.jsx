import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from '../features/userDetailSlice';


export default function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleDelete = (id) => {
        dispatch(deleteUser({id:id}))
        navigate('/display')
    }

    return (
        <div className='container my-4'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td></td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <Link to='/display' className='btn btn-sm btn-primary'>View</Link>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-warning ms-2'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
