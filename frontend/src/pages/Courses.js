import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Courses() {
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Free Certification Courses to help you get upskilled</h1>

                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="https://marketplace.canva.com/EAE9ooRAJnQ/1/0/1600w/canva-blue-simple-achievement-certificate-pX8z4TgiGd0.jpg" alt width={720} />
                    </div>
                </div>
            </div>
            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Courses focused on building strong foundational skills for career growth</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">

                        <h3 className="fs-2 text-body-emphasis">Free Resources</h3>
                        <p>Free guides on career paths, salaries, interview tips, and more.</p>
                    </div>
                    <div className="feature col">

                        <h3 className="fs-2 text-body-emphasis">Skill-based Learning</h3>
                        <p>600+ job-ready skills on offer in today's most in-demand domains</p>
                    </div>
                    <div className="feature col">

                        <h3 className="fs-2 text-body-emphasis">Learn Anytime, Anywhere</h3>
                        <p>Learn while working or studying from any place, across any device</p>
                    </div>
                </div>
            </div>

            <h4 className='container'>Explore Free Online Courses</h4>
            {/*Row 1*/}
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/sqli.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Data Science & Business Analytics</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>Completion Certificate</li>
                                        <li>Free Enrollment</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/IntroductiontoCybercrime_360.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Cyber Security</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Introduction-to-Artificial-Intelligence_360X194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Artificial Intelligence</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Row 2*/}
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/IntroductiontoFlutter_360x194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Flutter Course Online</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/IntroductiontoAffiliateMarketingforBeginners_360x194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Affiliate Marketing for Beginners</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/IntroductiontoKubernetes_360x194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Kubernetes</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Row 3*/}
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Innovating-with-Data-and-Google-Cloud.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Innovating with Data and Google Cloud</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Hadoop_360x194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Getting Started with Hadoop</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/IntroductiontoPMP_360x194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Project Management 101: PMP certification training</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Row 4*/}
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Agile-Scrum-Foundation_360X194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Agile Scrum Foundation</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Lean-Management_360X194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lean Management</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/Design-Thinking-Course_360X194.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Digital Transformation Course for Leaders</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Row 5*/}
            <div className='container my-5'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/TOGAF-9-Combined-level-1-and-level-2-training-course_360X194.jpg " className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">TOGAF® Enterprise Architecture Training Course (Foundation and Practitioner)</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/sqli.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">TensorFlow 101: Master the Python library Essentials</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.simplilearn.com/ice9/app/sqli.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Introduction to Big Data</h5>
                                <p className="card-text"><ul>
                                    <li>Completion Certificate</li>
                                    <li>Free Enrollment</li>
                                </ul></p>
                            </div>
                            <div className="card-footer">
                                <Link to="" className='btn btn-dark'>Go to Course</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <Footer />
        </div>
    )
}
