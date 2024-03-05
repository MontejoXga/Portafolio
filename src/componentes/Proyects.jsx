import React from 'react'
import portafolio from '../img/projects/portafolio.png'
import calculadora from '../img/projects/calculadora.png'
import clima from '../img/projects/clima.png'
import movieSearch from '../img/projects/movieSearch.png'

import css from '../img/css.png'
import html from '../img/html.png'
import js from '../img/js.png'
import react from '../img/react.png'
import api from '../img/Api.png'

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
                    <img src={portafolio} className="card-img-top border-bottom border-secondary" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title">Portafolio</h5>
                        <p className="card-text">
                            Demuestra un perfil con habilidades y proyectos adquiridos durante un aprendizaje.
                        </p>
                        <br />
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
                            <a type="button" href='https://github.com/MontejoXga/Portafolio' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                            <a type="button" href='https://montejoxga.github.io/Portafolio/' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={calculadora} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Calculadora</h5>
                            <p className="card-text">
                                Calculadora para realizar procesos de calculo de operaciones logicas y basicas.
                            </p>
                            <br />
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='https://github.com/MontejoXga/Calculadora' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='https://montejoxga.github.io/Calculadora/' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={clima} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Mapa de tiempo</h5>
                            <p className="card-text">
                                Medidor de clima con velocidad de viento y medidor de humedad en el area usando la api <a href="https://openweathermap.org" className='text-decoration-none'>OpenWeather</a>
                            </p>
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                                <img src={api} className='tec-use' alt="" />
                                <span className='pe-2'>Api</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='https://github.com/MontejoXga/mapa-del-tiempo.github.io' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='https://montejoxga.github.io/mapa-del-tiempo.github.io/' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={movieSearch} className="card-img-top border-bottom border-secondary" alt="..." />
                        <div className="card-body text-center">
                            <h5 className="card-title">Buscador de pelicula</h5>
                            <p className="card-text">Se realiza la busqueda de peliculas en conjunto con su descripcion usando la api <a href="https://www.omdbapi.com" className='text-decoration-none'>OMBD API</a></p>
                            <div className='pb-4'>
                                <img src={css} className='tec-use' alt="" />
                                <span className='pe-2'>css</span>
                                <img src={html} className='tec-use' alt="" />
                                <span className='pe-2'>HTML</span>
                                <img src={js} className='tec-use' alt="" />
                                <span className='pe-2'>Js</span>
                                <img src={api} className='tec-use' alt="" />
                                <span className='pe-2'>Api</span>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <a type="button" href='https://github.com/MontejoXga/MovieSearch' className="btn btn-dark btn-sm" target='blank'>See Code <i class="fa-brands fa-github"></i></a>
                                <a type="button" href='https://montejoxga.github.io/MovieSearch/' className="btn btn-success btn-sm" target='blank'>See Deploy <i class="fa-solid fa-eye"></i></a>
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
