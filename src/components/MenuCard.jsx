import React from 'react'

const MenuCard = () => {
  return (

    <div class="row fontFamily mb-3">
      <div class=" col-3 mb-2">
        
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
          className='btn-wsp' alt="" />
 
      </div>
      <div className="col-5">
        <p className='fw-bold'>Pizza Casserini <br />
        <small className='fw-normal'>Muzza, tomate y anchoas</small>
        </p>
        
      </div>
      <div className="col-2">
        <p className='colorRojo fw-bold'>$1200</p>
      </div>
    </div>
  )
}

export default MenuCard