import React from 'react'
import CarruselItem from './CarruselItem'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const Item = () => {
  return (
    <>
      <Navbar/>
      <div className="container pt-2 pb-2">
      <div className="row">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
        </svg>
        </div>
      </div>
      </div>
      <div className="container">
      <CarruselItem/>
      <div className="row ">
        <p className='h4 colorNaranja mt-3'>Restaurante El Sol</p>
      </div>
      <div className="row pb-2 border-bottom">
        <div className="ms-3 col-3 fontFamily text-center rounded text-white bg-rojo">10% Off</div>
        <div className="ms-3 col-4 text-center rounded text-white bg-naranja">Sumá puntos</div>
      </div>
      <div className="row mt-1 ">
        <div className="col-3">
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
                </svg>
        </div>
        <div className="col-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
        </svg> <small>1100 o menos</small>
        </div>
      </div>
      <div className="row mt-3 mb-3">
        <div className="col-7">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
        </svg> <small>Hamburguesas</small>
        </div>
      </div>
      <div className="row"> 
        <p>Plato más elegido:
        </p>
      </div>
      <div className="row">
      <div className="col-9">
          <p className='fontFamily fw-bold colorRojo'>Omelette Du Formasch</p>
        </div>
        <div className="col-2">$2500</div>
      </div>
      
      <div className="row justify-content-center fontFamily border-top pt-2 border-bottom pb-2">
      
      <p className='col-11 text-center sinBorder pt-1 pb-1 rounded bg-naranja fw-bold'>     
      <a class="sinSubrayado text-white " data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
       CONOCÉ LA CARTA
      </a>
      </p>
      <div class="collapse" id="collapseExample1">
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
          <MenuCard/>
      </div>
      {/* <p className=''>     
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        MENÚ
      </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
      </div> */}


      </div>
      </div>
      <footer className='container sticky-bottom mt-3'>
        <div className="row justify-content-center">
          <button className='col-4 me-3 sinBorder pt-2 pb-2  rounded bg-naranja fw-bold text-white'>RESERVAR</button>
          <button className='col-4 ms-3 sinBorder pt-2 pb-2  rounded bg-naranja fw-bold text-white'>DELIVERY</button>
        </div>
      </footer>
      
    </>
    
  )
}

export default Item