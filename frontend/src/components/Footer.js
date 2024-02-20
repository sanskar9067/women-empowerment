import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">© 2024 GraminUdyogini</p>



                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to="/courses" className="nav-link px-2 text-body-secondary">Courses</Link></li>
                    <li className="nav-item"><Link to="/blogs" className="nav-link px-2 text-body-secondary">Blogs</Link></li>
                    <li className="nav-item"><Link to="/inspiring" className="nav-link px-2 text-body-secondary">Inspiring Figures</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link px-2 text-body-secondary">About</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer;
