import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import Footer from '../components/Footer';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3001/userlogin", { email, password });
            if (res.data.success) {
                alert(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                navigate("/");
            } else {
                alert(res.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
                <div className="container card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mt-4">Login</p>
                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-envelope fa-lg me-3 fa-fw" /></span>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" className="form-control" placeholder='Your Email' />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock fa-lg me-3 fa-fw" /></span>
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" placeholder='Password' />
                                    </div>
                                </div>

                                <div className="text-center mb-4">
                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                </div>
                                <div className="text-center">
                                    <Link to="/forgotpassword" className="btn btn-secondary btn-lg m-2">Forgot Password</Link>
                                    <Link to="/register" className="btn btn-secondary btn-lg m-2">Sign Up</Link>
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
