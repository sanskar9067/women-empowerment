import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../context/auth';
import axios from 'axios';

export default function Yourjob() {
    const [auth] = useAuth();
    const [yourjob, setYourjob] = useState([]);
    const userid = auth.user._id;

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:3001/getyourjob?userid=${userid}`);
            setYourjob(res.data);
            console.log(auth.user.email);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDelete = async (id) => {
        try {
            const del = await axios.post("http://localhost:3001/deleteemployee", { id });
            if (del) {
                alert("Job Post Deleted");
            }
            else {
                alert("Job Post Not Deleted");
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar />
            <h1>Your Job Posting</h1>
            {yourjob.map(job => {
                return (
                    <div key={job._id}>
                        <div>
                            <div className="card mb-3" style={{ maxWidth: 540, margin: 'auto' }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={`http://localhost:3001/${job.employeelocation}`} className="img-fluid rounded-start" alt="Employee" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{job.name}</h5>
                                            <p className="card-text">{job.address}</p>
                                            <button className='btn btn-danger' onClick={() => handleDelete(job._id)}>Delete Job Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <Footer />
        </div>
    );
}
