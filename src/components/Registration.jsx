import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
const Registration = () => {
    const [nameLastName, setNameLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [mail2, setMail2] = useState('')
    const [password, setPassword] = useState('');
    const [objeto, setObjeto] =useState('')

    const handlePhone= (e) => {
        return setPhone(e.target.value)
    }
    const handleNameLastName= (e) => {
        return setNameLastName(e.target.value)
    }
    const handleMail2= (e) => {
        return setMail2(e.target.value)
    }
    const handleMail= (e) => {
        return setMail(e.target.value)
    }
    const handlePassword= (e) => {
        return setPassword(e.target.value)
    }
    const confirmarRegistro = (e)=> {
        e.preventDefault();
        const objeto1 = {
            mail,
            password
        }
        if (mail !== '' && password !== '' && phone !== '' && nameLastName !== '' && mail2 !== '' && mail === mail2) {
            setObjeto(objeto1)
        } else {
            alert('Completar campos')
        }
    } 
    if (objeto) {
        return(
            <>
            <Navbar/>
            <div className='container mt-5 mb-3'>Hola {nameLastName} tu nuevo usuario de registro es {mail} y tu contraseña es <span className='fw-bold'>{password}</span>
            </div>
            </>
        ) 
    }
  return (
    <>
    <div className="container-fluid bg-naranja">
        <div className="container pt-4 pb-3">
            <Link to='/' className='sinSubrayado'>
            <p className='fw-bold text-white h5'>Bienvenido/a a RESERVA-DELIVER</p>
            </Link>
        </div>
    </div>
    <div className="container text-center"><p className='mt-3 mb-3 h3'>REGISTRO</p>
    <form className='col-md-4 text-center' action="" onSubmit={confirmarRegistro}>
        <input type='text' className='mt-3 mb-3' onChange={handleNameLastName} value={nameLastName} placeholder="Nombre y Apellido" name="nameLastName"/>
        <input type='number' className='mt-3 mb-3' onChange={handlePhone} value={phone} placeholder="Teléfono" name="phone"/>
        <input type='email' className='mt-3 mb-3' onChange={handleMail} value={mail} placeholder="Correo" name="mail"/>
        <input type='email' className='mt-3 mb-3' onChange={handleMail2} value={mail2} placeholder="Repetir correo" name="mail2"/>
        <input type='password' className='mt-3 mb-3' onChange={handlePassword} value={password} placeholder='Contraseña' name="password"/>
        <div>
            <Link to='/appSecond'>
            <button disabled={mail==="" || password==="" || phone === '' || nameLastName === '' || mail2 === '' || mail !== mail2 }
             className='sinBorder pt-2 pb-2 pe-3 rounded ps-3 bg-naranja fw-bold text-white'>Iniciar</button>
            </Link>          
        </div>
    </form>
     </div>
    </>
  )
}

export default Registration