import React from 'react'
import {Link} from 'react-router-dom'
const ItemListContainer = () => {
  return (
    <div className='container mt-2 fontFamily'>
        <div className="row mb-2 mt-3">
            <h4 className='text-center fw-bold'>20 Opciones</h4>
        </div>
        <Link to='/idResto' className='sinSubrayado'>
        <div className="row border-top pt-3">
            <div className="col-4">
                <img src="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" 
                width='100%' alt="" />
            </div>
            <div className="col-7">
                <p className='colorNaranja fw-bold'>Restaurante El Sol <br />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star-half" viewBox="0 0 16 16">
                <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                </svg> <small className='text-black'>Increíble (55)</small> <br />
                <small className='text-black fw-bold'>
                    Córdoba, Capital
                </small>
                </p>
                <small className='fw-bold text-black'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </small>
            </div>
        </div>
        </Link>
        <div className="row pb-2 border-bottom justify-content-center mt-3">
            <button className='col-4 me-3 sinBorder pt-1 pb-1  rounded bg-naranja fw-bold text-white'>RESERVAR</button>
            <button className='col-4 ms-3 sinBorder pt-1 pb-1  rounded bg-naranja fw-bold text-white'>DELIVERY</button>
        </div>
    </div>
  )
}

export default ItemListContainer