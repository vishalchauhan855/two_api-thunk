import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewMovie } from '../features/movieSlice'

function WatchMovie() {
    const dispatch=useDispatch
//   useEffect(()=>{
//     dispatch(viewMovie())
//   },[dispatch])
const WatchLater=useSelector(state=>state.WatchLater)
console.log(WatchLater)

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/* Movie Card */}
          <div className="card shadow-sm border-0">
            {/* Card Header */}
            <div className="card-header bg-primary text-white">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">
                  <i className="bi bi-clock me-2"></i>
                  Watch Later
                </h5>
                <span className="badge bg-light text-dark">ID:</span>
              </div>
            </div>
            
    
            <div className="card-body">
          
              <h4 className="card-title mb-4">
               
              </h4>
              
              
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-calendar-date text-primary fs-5 me-3"></i>
                <div>
                  <small className="text-muted d-block">Watch Date</small>
                  <span className="fw-bold"></span>
                </div>
              </div>
              
            
              <div className="d-flex align-items-center">
                <i className="bi bi-flag text-primary fs-5 me-3"></i>
                <div>
                  <small className="text-muted d-block">Priority</small>
                  <span className="badge bg-warning text-dark px-3 py-1">
                    
                  </span>
                </div>
              </div>
            </div>
            
           
            <div className="card-footer bg-light">
              <div className="d-flex justify-content-between">
                <button className="btn btn-sm btn-outline-primary">
                  <i className="bi bi-pencil me-1"></i>
                  Edit
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="bi bi-trash me-1"></i>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchMovie
