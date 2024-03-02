import React,{useState} from 'react'
import BurguerButton from '../function/BurguerButton.jsx'

function Navbar() {

  const[clicked, setClicked]=useState(false)

  const handleClick = () =>{
    setClicked(!clicked)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Desarrollador <span className='text-titulo'>Full Stack</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex">
                <a className="nav-link align-self-center text-white" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link align-self-center text-white" href="#SobreMi">Sobre mi</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link align-self-center text-white" href="#Skills">Skills</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link align-self-center text-white" href="#Project">Proyectos</a>
              </li>
              <li className="nav-item d-flex">
                <a className="nav-link align-self-center text-white" href="#Contact">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar


