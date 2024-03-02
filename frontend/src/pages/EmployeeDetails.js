import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function EmployeeDetails() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/details/${id}`)
            .then(res => setDetail(res.data))
            .catch(err => console.log(err));


    }, [id]);

    const handleMessage = (phoneNumber) => {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello, congratulation on getting hired for the job.")}`;
        window.open(whatsappUrl, '_blank');
    }

    const hiring = async (id) => {
        try {
            const del = await axios.post("http://localhost:3001/deleteemployee", { id });
            if (del.data.success) {
                alert(del.data.message);
                navigate("/hiring");
            }
            else {
                alert(del.data.message);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='container mt-4'>
                <h1 style={{ textAlign: 'center' }}>Details</h1>
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-header bg-dark text-white">Person Details</div>
                        <div className="card-body">
                            <img
                                src={`http://localhost:3001/${detail.employeelocation}`}
                                className="card-img-top rounded-circle mx-auto d-block"
                                alt="Employee"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <h5 className="card-title text-center mt-3">{detail.name}</h5>
                            <p className="card-text text-center">{detail.address}</p>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><strong>Skills:</strong> {detail.skills}</li>
                                <li className="list-group-item"><strong>Salary:</strong> {detail.payment}</li>
                                <li className="list-group-item"><strong>Phone:</strong> {detail.phoneno}</li>
                            </ul>
                            <button className="btn btn-success mt-3 d-block mx-auto" onClick={() => handleMessage(detail.phoneno)}><i class="fa-brands fa-whatsapp m-2"></i>Hire through Whatsapp</button>
                            <button className="btn btn-success mt-3 d-block mx-auto" onClick={() => hiring(detail._id)}>Confirm Hiring Process</button>
                        </div>
                        <Link to="/chat" className='btn btn-dark'>Meesage the employee</Link>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}
