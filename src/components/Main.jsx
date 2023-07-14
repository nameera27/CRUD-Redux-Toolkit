import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'


export default function Main() {
    const users = useSelector((state) => state.users);

    return (
        <div className='container my-4 '>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">List of Users</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>

                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
