import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

export default function ForgotPassword() {
    const [email, setEmail] = useState();
    const [newpassword, setNewpassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/updatepassword", { email, newpassword });
            if (res.data.success) {
                alert(res.data.message);
            }
            else {
                alert(res.data.message);
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div>
                <Navbar />
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
                    <div className="container card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <p className="text-center h1 fw-bold mb-5 mt-4">Forgot Password</p>
                                <form >

                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-envelope fa-lg me-3 fa-fw" /></span>
                                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" placeholder='Your Email' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">New Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fas fa-lock fa-lg me-3 fa-fw" /></span>
                                            <input type="password" id="password" value={newpassword} onChange={(e) => setNewpassword(e.target.value)} className="form-control" placeholder='Password' />
                                        </div>
                                    </div>

                                    <div className="text-center mb-4">
                                        <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
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
        </div>
    )
}
