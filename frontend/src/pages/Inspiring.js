import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Inspiring() {
    return (
        <div>
            <Navbar />
            <div className='container my-4'>
                <h1>Inspiring Figures</h1>
                <div className='row my-4'>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Kalpana_Chawla_1_1024x1024.jpg?v=1689940035" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Kalpana Chawla-Reaching for the Stars:</h5>
                                        <p className="card-text">Kalpana Chawla, the first Indian-born woman to travel to space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Mary_Kom_1024x1024.jpg?v=1689940120" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Mary Kom - A Punch of Excellence:</h5>
                                        <p className="card-text">Mary Kom, the "Magnificent Mary," is a renowned boxer and the epitome of determination. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Kiran_Mazumdar-Shaw_1024x1024.jpg?v=1689940154" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Kiran Mazumdar-Shaw - Innovating for a Better World:</h5>
                                        <p className="card-text">Kiran Mazumdar-Shaw, the founder of Biocon, is a trailblazing entrepreneur and businesswoman.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Arunima_Sinha_1024x1024.jpg?v=1689940180" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Arunima Sinha - Conquering the Everest:</h5>
                                        <p className="card-text">Arunima Sinha, a former national volleyball player, became the world's first female amputee to summit Mount Everest.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row my-4'>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Sudha_Murthy_1024x1024.jpg?v=1689940206" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Sudha Murthy - Philanthropy and Social Impact:</h5>
                                        <p className="card-text">Sudha Murthy, a renowned author and philanthropist, has dedicated her life to making a difference in the lives of others.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://cdn.shopify.com/s/files/1/0597/5592/1540/files/Indira_Nooyi_1024x1024.jpg?v=1689940237" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Indira Nooyi - Leading with Vision:</h5>
                                        <p className="card-text">ndira Nooyi, the former CEO of PepsiCo, is a visionary business leader and advocate for diversity and inclusion.</p>
                                    </div>
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
