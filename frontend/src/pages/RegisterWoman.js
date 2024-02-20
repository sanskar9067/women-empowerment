import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function RegisterWoman() {

    const [auth] = useAuth();
    const userid = auth.user._id;
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [skills, setSkills] = useState();
    const [phoneno, setPhoneno] = useState();
    const [idcardno, setIdcardno] = useState();
    const [payment, setPayment] = useState();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('skills', skills);
        formData.append('phoneno', phoneno);
        formData.append('userid', userid);
        formData.append('idcardno', idcardno);
        formData.append('payment', payment);
        formData.append('file', file);
        try {
            const res = await axios.post("http://localhost:3001/postwomenemployees", formData);
            if (res.data.success) {
                alert(res.data.message);
                navigate("/");
            } else {
                alert(res.data.message);
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
                <div className="container card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mt-4">Register for Employment</p>
                            <form data-gtm-form-interact-id={0}>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example1c" className="form-control" placeholder='Name' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="email" value={address} onChange={(e) => setAddress(e.target.value)} id="form3Example3c" className="form-control" placeholder='Address' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} id="form3Example4c" className="form-control" placeholder='Skills' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="tel" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} id="form3Example3c" className="form-control" placeholder='Phone No.' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="tel" value={idcardno} onChange={(e) => setIdcardno(e.target.value)} id="form3Example4c" className="form-control" placeholder='Identity Card No.' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-building fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="tel" value={payment} onChange={(e) => setPayment(e.target.value)} id="form3Example4c" className="form-control" placeholder='Expected Payment (per month)' />
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-image fa-lg me-3 fa-fw" />
                                    <div className="form-outline flex-fill mb-0">
                                        <label>Upload a photo</label>
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} id="form3Example4c" className="form-control" />
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202310/women-graphics-205403945-16x9_0.jpg?VersionId=BEzQda7Dh.ks_wHZ.kaGzq7XpkMNfQE_" className="img-fluid" alt="Sample" />
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}
