import React, { useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [selectedOption, setSelectedOption] = useState('');
    const [organisation, setOrganisation] = useState();
    const [file, setFile] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('isOrganization', selectedOption);
        formData.append('organisation', organisation);
        formData.append('file', file);
        try {
            const res = await axios.post("http://localhost:3001/postuser", formData);
            if (res.data.success) {
                alert(res.data.message);
            }
            else {
                alert(res.data.message);
            }
            navigate("/login");
        }
        catch (err) {

        }
    }
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <div className="container card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                            <form data-gtm-form-interact-id={0}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example1c" className="form-control" placeholder='Your Name' />

                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3c" className="form-control" placeholder='Your Email' />

                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4c" className="form-control" placeholder='Password' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-building fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <p>Signing up as: </p>
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="yes"
                                                checked={selectedOption === 'yes'}
                                                onChange={handleChange}
                                            />{' '}
                                            Organisation
                                        </label><br />
                                        <label>
                                            <input
                                                type="radio"
                                                name="option"
                                                value="no"
                                                checked={selectedOption === 'no'}
                                                onChange={handleChange}
                                            />{' '}
                                            Job Seeker
                                        </label>

                                        {selectedOption === 'yes' && (
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" value={organisation} onChange={(e) => setOrganisation(e.target.value)} id="form3Example4c" className="form-control" placeholder='Organization Name' />
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-image fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} id="form3Example4c" className="form-control" />
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src="https://www.apc.org/sites/default/files/styles/node_full-size/public/cover_womencommunityradiostudy.png?itok=K0GNgBQ9_" className="img-fluid" alt="Sample" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
