import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { viewMovie, WatchMovie } from '../features/movieSlice'

function WatchLater() {
const{ register,handleSubmit,reset}=useForm()
const dispatch=useDispatch()
const movieList = useSelector(state => state.movies.movieList);

console.log(movieList?.[0]?.title);

useEffect(()=>{
 dispatch(viewMovie())
 
},[dispatch])

function addData(data){
// console.log(data)
dispatch(WatchMovie(data))
}

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">
                <i className="bi bi-clock me-2"></i>
                Watch Later Form
              </h4>
            </div>
            
            <div className="card-body">
              <form onSubmit={handleSubmit(addData)}>
            
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    <i className="bi bi-folder me-1"></i>
                    Select Category
                  </label>
                  <select 
                    className="form-select" {...register('Title')}
                  >
                    <option value="">Choose a category...</option>
                {movieList?.map(ele=>
                     <option value="{ele.title}">{ele.title}</option>
                )}
                  </select>
                  <div className="form-text">Select the type of content you want to save.</div>
                </div>

                <div className="mb-4">
                  <label htmlFor="watchDate" className="form-label">
                    <i className="bi bi-calendar me-1"></i>
                    Watch Later Date
                  </label>
                  <input 
                    type="date" 
                    className="form-control" 
                     {...register('Date')}
                  />
                  <div className="form-text">Select when you plan to watch this.</div>
                </div>

        
                <div className="mb-4">
                  <label htmlFor="priority" className="form-label">
                    <i className="bi bi-flag me-1"></i>
                    Priority Level
                  </label>
                  <select {...register('Priority')}
                    className="form-select" 
                    id="priority"
                  >
                    <option value="low">Low Priority</option>
                    <option value="medium" selected>Medium Priority</option>
                    <option value="high">High Priority</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

             
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button 
                    type="button" 
                    className="btn btn-outline-secondary me-md-2"
                    onClick={() => console.log("Cancelled")}
                  >
                    <i className="bi bi-x-circle me-1"></i>
                    Cancel
                  </button>
                  <button
                    type="submit" 
                    className="btn btn-primary"
                  >
                    <i className="bi bi-clock me-1"></i>
                    Save for Later
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-muted">
              <small>Your watch later list will be saved for 30 days.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchLater
