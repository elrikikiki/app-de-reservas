import React from 'react'

const SearchBanner = () => {
  return (
    <div className='container-fluid bg-options'>
        <div className="container">
            <div className="row justify-content-center">
            <input className='col-8 rounded mb-3 mt-3' type='search' placeholder='Localidad'/>
            </div>
            <div className="row justify-content-center">
            <input className='col-8 mb-3 rounded border-4 border-danger' type='search' placeholder='Tipo de restaurant'/>
            </div>
        </div>
    </div>
  )
}

export default SearchBanner