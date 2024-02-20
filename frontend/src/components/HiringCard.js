import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HiringCard() {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3001/hiring")
            .then(response => setEmployees(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {employees.map(employee => (
                <div key={employee.id}>
                    <div className="card mb-3" style={{ maxWidth: 540, margin: 'auto' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`http://localhost:3001/${employee.employeelocation}`} className="img-fluid rounded-start" alt="Employee" />
                            </div >
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{employee.name}</h5>
                                    <p className="card-text">{employee.address}</p>
                                    <Link className='btn btn-dark' to={`/employee/${employee._id}`}>View More Details</Link>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            ))
            }
        </div >
    );
}
