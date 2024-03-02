import React from 'react'
import ordenador from '../img/ordenadores.png'


export default function Body() {
  return (
    <div className='body'>
        <div className='fondo'>
          <div className='contenedor'>
            <div className='present'>
              <h1 className='text-first'>Marco Antonio</h1>
              <img src={ordenador}  alt="imagen" />
              <p className='text-first'>Desarrollador Full Stack</p>
            </div>
          </div>
        </div>
    </div>
  )
}
