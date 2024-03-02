import React from 'react'
import proyect1 from '../img/proyect1.png'
import css from '../img/css.png'
import html from '../img/html.png'
import js from '../img/js.png'
import react from '../img/react.png'

export default function Proyects() {
  return (
    <>
    <section id='Project'>
        <div className='container d-flex flex-column pt-5 pb-5'>
            <div className='text-center pb-4'>
                <h1>Projects</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src={proyect1} className="card-img-top border-bottom border-secondary" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Tittle project</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora officia debitis tempore alias cum est unde modi nisi, veniam impedit quisquam odit veritatis explicabo recusandae? Voluptate eius consectetur voluptatem..</p>
                        <div className='pb-4'>
                            <img src={css} className='tec-use' alt="" />
                            <span className='pe-2'>css</span>
                            <img src={html} className='tec-use' alt="" />
                            <span className='pe-2'>HTML</span>
                            <img src={js} className='tec-use' alt="" />
                            <span className='pe-2'>Js</span>
                            <img src={react} className='tec-use' alt="" />
                            <span className='pe-2'>React</span>

                        </div>
                        <div className='d-flex justify-content-evenly'>
                            <a type="button" href='https://github.com/MontejoXga/Login' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                            <a type="button" href='https://montejoxga.github.io/Login/' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={proyect1} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Tittle project</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora officia debitis tempore alias cum est unde modi nisi, veniam impedit quisquam odit veritatis explicabo recusandae? Voluptate eius consectetur voluptatem..</p>
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                                <img src={react} className='tec-use' alt="" />
                                <span className='pe-2'>React</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='#' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='#' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={proyect1} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Tittle project</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora officia debitis tempore alias cum est unde modi nisi, veniam impedit quisquam odit veritatis explicabo recusandae? Voluptate eius consectetur voluptatem..</p>
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                                <img src={react} className='tec-use' alt="" />
                                <span className='pe-2'>React</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='#' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='#' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={proyect1} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Tittle project</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora officia debitis tempore alias cum est unde modi nisi, veniam impedit quisquam odit veritatis explicabo recusandae? Voluptate eius consectetur voluptatem..</p>
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                                <img src={react} className='tec-use' alt="" />
                                <span className='pe-2'>React</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='#' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='#' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
