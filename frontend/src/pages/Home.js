import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Sect from '../components/Sect'
import { useAuth } from '../context/auth'
import Footer from '../components/Footer'

export default function Home() {
    const [auth] = useAuth();
    return (
        <div>
            <Navbar />
            <Carousel />
            {
                !auth.user ? (
                    <>
                    </>
                ) : (
                    <>
                        <div className='container mt-4 d-flex justify-content-center'>
                            <div classname="container">
                                <div className="card" style={{ maxWidth: 540 }}>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={`http://localhost:3001/${auth.user.location}`} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Welcome {auth.user.name}</h5>
                                                <p className="card-text">
                                                    "Be a part of India's transformative journey – empower women, drive change, and shape the future through meaningful employment opportunities."</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }



            <div>
                <div className="my-5">
                    <div className="p-5 text-center bg-body-tertiary">
                        <div className="container py-5">
                            <h1 className="text-body-emphasis">Helping Women in Rural Areas to get employed</h1>
                            <p className="col-lg-8 mx-auto lead">
                                Graminudyogini focuses on empowering women in rural areas by providing job training, skill development, and networking opportunities, enabling them to secure employment opportunities. Through targeted initiatives, it aims to address unemployment challenges and enhance economic opportunities for women in rural communities.                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="container px-4 py-5">
                    <h2 className="pb-2 border-bottom">Features</h2>

                    <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                        <div className="col d-flex flex-column align-items-start gap-2">
                            <h2 className="fw-bold text-body-emphasis">Features in our website to help you get your first job</h2>
                            <p className="text-body-secondary">
                                In our website dedicated to helping individuals secure their first job, we offer a comprehensive array of features designed to support and guide them through the job search process:</p>
                        </div>

                        <div className="col">
                            <div className="row row-cols-1 row-cols-sm-2 g-4">
                                <div className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis">Free Certification Courses</h4>
                                    <p className="text-body-secondary">Free Certification courses to get you upskilled.</p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis">Blogs</h4>
                                    <p className="text-body-secondary">It keeps you updated on how the world has its own point of view in this field.</p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis">Inspiring Figures</h4>
                                    <p className="text-body-secondary">Provides the examples of great Indian Womens to keep you motivated that anyhting is possible. </p>
                                </div>

                                <div className="col d-flex flex-column gap-2">
                                    <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">

                                    </div>
                                    <h4 className="fw-semibold mb-0 text-body-emphasis">About</h4>
                                    <p className="text-body-secondary">Gives the brief description of the web app to let the users know what it actually do.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>

    )
}
