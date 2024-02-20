import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HiringCard from '../components/HiringCard'

export default function Hiring() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <h1 className="m-4" style={{ textAlign: 'center' }}>Hiring List</h1>
                <div>
                    <HiringCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}
