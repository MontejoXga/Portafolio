import React from 'react'

import html from '../img/html.png'
import css from '../img/css.png'
import js from '../img/js.png'
import bootstrap from '../img/bootstrap.png'
import codeigniter from '../img/codeigniter.png'
import flask from '../img/flask.png'
import github from '../img/github.png'
import laravel from '../img/laravel.png'
import npm from '../img/npm.png'
import php from '../img/php.png'
import photoshop from '../img/photoshop.png'
import postgres from '../img/postgres.png'
import postman from '../img/postman.png'
import react from '../img/react.png'
import sql from '../img/sql.png'
import trello from '../img/trello.png' 
import vsc from '../img/vsc.png'



export default function Skills() {
  return (
    <>
    <section id='Skills' className='bg-body-secondary container-fluid'>
      <div className='container pt-5 pb-4 d-flex flex-column'>
        <div className='text-center mb-3'>
            <h2>Tecnologias</h2>
        </div>
        <div className='row gap-4 mb-5 justify-content-center'>
            <div className="card pt-2 pb-2 " style={{width: '6rem',}}>
              <img src={html} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Html</p>
            </div>
            <div className="card pt-2 pb-2 " style={{width: '6rem',}}>
              <img src={css} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">CSS</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={js} className="card-img-top card-img"  alt="..."/>
              <p className="text-card mt-2">JS</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={bootstrap} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Bootstrap</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={codeigniter} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">CodeIgniter</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={flask} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Flask</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={laravel} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Laravel</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={php} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">PHP</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={postgres} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Postgres</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={react} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">React</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={sql} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">MySQL</p>
            </div>
        </div>
        <div className="text-center mb-3">
          <h2>Herramientas</h2>
        </div>
        <div className='row gap-4 mb-5 justify-content-center'>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={github} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Git Hub</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={postman} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Postman</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={vsc} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">VSC</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={trello} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Trello</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={npm} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">npm</p>
            </div>
            <div className="card pt-2 pb-2" style={{width: '6rem',}}>
              <img src={photoshop} className="card-img-top card-img" alt="..."/>
              <p className="text-card mt-2">Photoshop</p>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}
