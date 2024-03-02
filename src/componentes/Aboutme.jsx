import React from 'react'
import perfil from '../img/perfil.jpg'
import pdf from '../pdf/CV.pdf'

export default function Aboutme() {
  return (
    <>
      <section id='SobreMi'>
        <div className='container' >
          <section id='hero'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-5'>
                  <div className='mx-auto align-self-center'>
                    <h1 className='display-4 fw-bold mb-4 mt-4'>Sobre <span className='text-titulo'>Mi.</span></h1>
                    <p className='lead mb-2 text-titulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, error nam magnam accusantium sapiente voluptatem omnis minima laudantium nihil blanditiis, eligendi, distinctio aut eaque exercitationem temporibus aperiam optio dolor porro.</p>
                    <div className='text-center mb-4'>
                      <a href={pdf} className='btn btn-outline-primary' target='blank'>Ver CV</a>
                    </div>
                    <div className='d-flex justify-content-evenly'>
                      <div className='justify-content-center'>
                        <div className='text-center border border-3 rounded-circle p-2'>
                          <a href="https://github.com/MontejoXga?tab=repositories" className='link-dark' target='blank'>
                            <i className="fa-brands fa-github fa-3x"></i>
                          </a>
                        </div>
                      </div>
                      <div className='d-flex justify-content-center'>
                        <div className='text-center border border-3 rounded-circle p-2'>
                          <a href="https://www.linkedin.com/in/marco-antonio-montejo-guevara/" className='link-primary' target='blank'>
                            <i className="fa-brands fa-linkedin fa-3x"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex mb-5 mt-5'>
                  <div className='container mx-auto align-self-center '>
                    <img src={perfil} class="img-fluid rounded-circle" alt="imagen" />
                  </div>
                </div>
            </div>
            </section>
        </div>
      </section>
    </>
  )
}
