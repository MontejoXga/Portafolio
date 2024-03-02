import React from 'react'

export default function Contact() {
  return (
    <>
        <section id='Contact'>
            <div className='bg-body-secondary'>
                <div className='container p-5 '>
                    <div className='row justify-content-center'>
                        <div className='border border-white border-3 rounded-4 col-lg-8 col-xl-7'> 
                            <div className='m-4'>
                                <form action="https://formsubmit.co/montejoguevaram0@gmail.com" method='POST'>
                                    <legend className='text-center border-bottom border-light border-5'>Contactame</legend>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="nombre" name='nombre' placeholder="name@example.com"/>
                                        <label for="floatingInput">Nombre</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" id="correo" name='correo' placeholder="name@example.com"/>
                                        <label for="floatingInput">Correo</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="telefono" name='telefono' placeholder="name@example.com"/>
                                        <label for="floatingInput">Telefono</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="mensaje" name='mensaje' style={{height: 100}} defaultValue={""} />
                                        <label htmlFor="floatingTextarea2">Mensaje</label>
                                    </div>
                                    <input type="submit" className="btn btn-primary" value={'ENVIAR'}/>
                                </form> 
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
