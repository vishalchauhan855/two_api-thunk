import { useForm } from 'react-hook-form'
import { useDispatch ,useSelector } from 'react-redux'
import { addMovie, updateMovie, viewMovie } from '../features/movieSlice'
import { use, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function HomeForm() {
  const { 
    register, 
    handleSubmit, 
    reset,
    watch 
  } = useForm()
  const {id}=useParams()
const dispatch=useDispatch()
const redirect=useNavigate()


const { movieList } = useSelector(state => state.movies)

useEffect(()=>{
dispatch(viewMovie())
const singleData=movieList.find((movie)=>{
  return movie.id==id
})
reset(singleData)
},[dispatch,reset])


  const onSubmit = (data) => {
    // console.log('Form submitted:', data)
  if(id==null){
      dispatch(addMovie(data))
    reset()
  }else{
    dispatch(updateMovie(data))
    redirect('/')
    reset()
  }
  }

  const ratingValue = watch('rating') || 0

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h2 className="h4 mb-0 text-center">Movie Form</h2>
            </div>
            
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
               
                <div className="mb-3">
                  <label htmlFor="title" className="form-label fw-bold">
                    Movie Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    className="form-control"
                    placeholder="Enter movie title"
                    {...register('title')}
                  />
                </div>

            
                <div className="mb-3">
                  <label htmlFor="director" className="form-label fw-bold">
                    Director
                  </label>
                  <input
                    id="director"
                    type="text"
                    className="form-control"
                    placeholder="Enter director name"
                    {...register('director')}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="year" className="form-label fw-bold">
                    Release Year
                  </label>
                  <input
                    id="year"
                    type="number"
                    className="form-control"
                    placeholder="Enter release year"
                    {...register('year')}
                  />
                </div>

      
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label fw-bold">
                    Genre
                  </label>
                  <input
                    id="genre"
                    type="text"
                    className="form-control"
                    placeholder="Enter genre"
                    {...register('genre')}
                  />
                </div>


                <div className="mb-3">
                  <label htmlFor="genre" className="form-label fw-bold">
                    Image URL
                  </label>
                  <input
                  type='url'
                    className="form-control"
                    placeholder="Enter Movie URL"
                    {...register('URL')}
                  />
                </div>

             
                <div className="mb-4">
                  <label htmlFor="rating" className="form-label fw-bold">
                    Rating: {ratingValue}/10
                  </label>
                  <input
                    id="rating"
                    type="range"
                    className="form-range"
                    min="0"
                    max="10"
                    step="0.5"
                    defaultValue="0"
                    {...register('rating')}
                  />
                  <div className="d-flex justify-content-between text-muted small mt-1">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                  </div>
                </div>

            
             

            
                <button 
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mb-3"
                >
                  <i className="bi bi-plus-circle me-2"></i>
                  Add Movie
                </button>

                <button 
                  type="button" 
                  onClick={() => reset()}
                  className="btn btn-outline-secondary w-100"
                >
                  <i className="bi bi-eraser me-2"></i>
                  Clear Form
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeForm