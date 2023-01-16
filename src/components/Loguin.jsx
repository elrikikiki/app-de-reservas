import React from 'react'
import { useState } from 'react'
import AppSecond from '../appSecond/AppSecond'
import {Link} from 'react-router-dom'
const Loguin = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [objeto, setObjeto] = useState('');

    const handleMail= (e) => {
        return setMail(e.target.value)
    }
    const handlePassword= (e) => {
        return setPassword(e.target.value)
    }
    const confirmarInicio = (e)=> {
        e.preventDefault();
        const objeto1 = {
            mail,
            password
        }
        if (mail !== '' && password !== '') {
            setObjeto(objeto1)
        } else {
            alert('Completar campos')
        }
    }
    
    if (objeto) {
        return (
          <>
          <AppSecond/>
          </> 
        )}
  return (
    <>
    <div className="container-fluid bg-naranja">
        <div className="container pt-4 pb-3">
            <Link to='/' className='sinSubrayado'>
            <p className='fw-bold  text-white h5'>RESERVA-DELIVER
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class=" ms-2 mb-2 bi bi-egg-fried" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
            </svg>
            </p>
            </Link>
        </div>
    </div>
    <div className='container border-bottom'>
        <div className='row justify-content-center'>
        <h3 className='mt-4 text-center colorCeleste'>INICIO DE SESIÓN</h3>

        <form className='col-md-4 text-center' action="" onSubmit={confirmarInicio}>
        <input type='email' className='mt-3 mb-3' onChange={handleMail} value={mail} placeholder="Correo" name="mail"/>
        <input className='mt-1 mb-3' type='password' onChange={handlePassword} value={password} placeholder='Contraseña' name="password"/>
        <div>
            <Link to='/aplication'><button disabled={mail==="" || password===""} className='sinBorder pt-2 pb-2 pe-3 rounded ps-3 bg-naranja fw-bold text-white'>Iniciar</button></Link>
        </div>
        </form>

        <p className='mt-4'>¿No estás registrado? <Link to='/registration'><ins className='colorRojo'>Regístrate</ins></Link>
        </p>
        </div>
    </div>
    </>
  )
}

export default Loguin