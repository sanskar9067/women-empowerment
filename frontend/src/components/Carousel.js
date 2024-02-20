//ye hai jumbotron
import React from 'react'
import FinalLogograminudyogini from './assets/FinalLogograminudyogini.png'

export default function Carousel() {

  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={FinalLogograminudyogini} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={300} loading="lazy" />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">GraminUdyogini Empowerment</h1>
            <p className="lead">Graminudyogini is a program dedicated to empowering rural women by facilitating their access to employment opportunities through skill development, job training, and networking initiatives. By equipping women with the necessary skills and resources, it aims to enhance their employability, increase their participation in the workforce, and contribute to the economic growth of rural communities.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
        </div>
      </div>

    </div >

  )
}
