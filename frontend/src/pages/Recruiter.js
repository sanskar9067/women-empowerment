import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Recruiter() {
    const [rec, setRec] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/getrecruiter")
            .then(rec => setRec(rec.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <Navbar />
            <div className='d-flex justify-content-center my-4'>
                <div>
                    {
                        rec.map(rec => (
                            <div>
                                <div className="card mb-3" style={{ width: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`http://localhost:3001/${rec.location}`} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{rec.name}</h5>
                                                <p className="card-text">{rec.organisation}</p>
                                                <p className="card-text"><small className="text-body-secondary">{rec.email}</small></p>
                                            </div>
                                        </div>
                                        <Link to="/chat" className='btn btn-dark'>Start the Chat</Link>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}
