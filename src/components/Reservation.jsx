import React from 'react'
import Navbar from './Navbar'
const Reservation = () => {
  return (
    <>
    <Navbar/>
    <div className="container-fluid fontFamily">
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
          <p className='h3 colorCeleste fw-bold'>Encontrá el mejor restaurant</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid bg-reservation">
      <div className="container">
          <form className='row pt-3 pb-3' action="">
            <div className="ps-5 mb-3 col-12">
            <input className='rounded' placeholder='Buscar restaurante' type="text" />
            </div>
            <div className="ps-5 col-10">
            <select class="form-select" aria-label="Default select example">
          <option selected>Personas</option>
          <option value="1">1 persona</option>
          <option value="2">2 personas</option>
          <option value="3">3 personas</option>
          </select>
            </div>
         
          </form>

      </div>
    </div>
    </>
  )
}

export default Reservation