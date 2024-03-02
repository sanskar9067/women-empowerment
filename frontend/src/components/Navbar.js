import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/auth'
import FinalLogograminudyogini from './assets/FinalLogograminudyogini.png'

export default function Navbar() {
    const [auth] = useAuth();
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate("/");
        window.location.reload();

    }
    //GramUdyogini Empowerment
    return (
        <div >
            <nav className="navbar bg-dark navbar-expand-xl navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand"><img src={FinalLogograminudyogini} className="m-2" alt="logo" height="50px" />GraminUdyogini Empowerment</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvas" aria-controls="navbarOffcanvas" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end bg-secondary" id="navbarOffcanvas" tabIndex={-1} aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-light" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <div className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {
                                    !auth.user ? (
                                        <>
                                            <Link className="btn btn-light" to="/login">Login</Link>
                                            <Link className="btn btn-light mx-2" to="/register">SignUp</Link>

                                        </>
                                    ) : (
                                        <>
                                            {
                                                auth.user.isOrganization === "yes" ? (<>
                                                    <Link className="nav-item nav-link" to="/hiring">Hire a Women for Employment</Link>
                                                    <Link className="nav-item nav-link" to="/blogs">Blogs</Link>
                                                    <Link className="nav-item nav-link" to="/inspiring">Inspiring Figures</Link>
                                                    <Link className="nav-item nav-link" to="/about">About Us</Link>
                                                    <Link className='btn btn-light' to="/" onClick={handleLogout} >Logout</Link>

                                                </>) : (<>
                                                    <Link className="nav-item nav-link" aria-current="page" to="/registerwoman">Register a Women for Employment</Link>
                                                    <Link className="nav-item nav-link" to="/yourjob">Your Job Posting</Link>
                                                    <Link className="nav-item nav-link" to="/courses">Courses</Link>
                                                    <Link className="nav-item nav-link" to="/blogs">Blogs</Link>
                                                    <Link className="nav-item nav-link" to="/inspiring">Inspiring Figures</Link>
                                                    <Link className="nav-item nav-link" to="/about">About Us</Link>
                                                    <Link className="nav-item nav-link" to="/contactrecruiter">Contact Recruiter</Link>
                                                    <Link className='btn btn-light' to="/" onClick={handleLogout} >Logout</Link>
                                                </>)
                                            }


                                        </>

                                    )
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </nav>



        </div>
    )
}
