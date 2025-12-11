import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteMovie, viewMovie } from '../features/movieSlice'
import {NavLink} from 'react-router-dom'
function HomeList() {
  const dispatch = useDispatch()
  
  // Uncomment to fetch movies on component mount
  useEffect(() => {
    dispatch(viewMovie())
  }, [dispatch])

  const { movieList } = useSelector(state => state.movies)
  //  console.log(movieList)
   
  // console.log("Redux state:", useSelector(state => state.Movie))
 function Trash(id){
 dispatch(deleteMovie(id))
 }

  return (
    <div className="container-fluid py-4">
      {/* Header Section */}
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="display-5 fw-bold text-center text-primary">Movie Collection</h1>
          <p className="lead text-center text-muted">
            {movieList?.length > 0 
              ? `${movieList.length} movies available` 
              : 'Browse our collection'}
          </p>
        </div>
      </div>

      {/* Movie Cards Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {movieList && movieList.length > 0 ? (
          movieList.map((movie) => (
            <div key={movie.id} className="col">
              <div className="card h-100 shadow-sm border-0 hover-shadow transition-all">
                {/* Movie Poster with URL or Placeholder */}
                <div className="position-relative overflow-hidden" style={{ height: '300px' }}>
             <img
  src={
    movie.URL ||
    `https://via.placeholder.com/300x450/6c757d/ffffff?text=${encodeURIComponent(
      movie.title || "No+Title"
    )}`
  }
  className="card-img-top object-fit-cover d-block mx-auto img-fluid"
  alt={movie.title || `Movie ${movie.id}`}
  onError={(e) => {
    e.target.src = `https://via.placeholder.com/300x450/6c757d/ffffff?text=${encodeURIComponent(
      movie.title || "No+Image"
    )}`;
  }}
/>

                  
                  {/* Rating Badge - only show if rating > 0 */}
                  {movie.rating && parseFloat(movie.rating) > 0 && (
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-warning text-dark p-2">
                        <i className="bi bi-star-fill me-1"></i>
                        {parseFloat(movie.rating).toFixed(1)}
                      </span>
                    </div>
                  )}
                  
                  {/* ID Badge */}
                  <div className="position-absolute top-0 start-0 m-2">
                    <span className="badge bg-dark bg-opacity-75 text-white">
                      ID: {movie.id.substring(0, 6)}...
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  {/* Movie Title - Show placeholder if empty */}
                  <h5 className="card-title fw-bold">
                    {movie.title || <span className="text-muted">Untitled Movie</span>}
                  </h5>
                  
                  {/* Director Info */}
                  {movie.director && (
                    <div className="mb-2">
                      <small className="text-muted">Directed by:</small>
                      <p className="card-text mb-1 fst-italic">{movie.director}</p>
                    </div>
                  )}
                  
                  {/* Year and Genre Badges */}
                  <div className="mb-3">
                    {movie.year && (
                      <span className="badge bg-secondary me-1 mb-1">
                        <i className="bi bi-calendar3 me-1"></i>
                        {movie.year}
                      </span>
                    )}
                    {movie.genre && (
                      <span className="badge bg-info me-1 mb-1">
                        <i className="bi bi-tag me-1"></i>
                        {movie.genre}
                      </span>
                    )}
                  </div>
                  
                  {/* Empty Data Warning */}
                  {(!movie.title && !movie.director && !movie.year && !movie.genre) && (
                    <div className="alert alert-warning p-2 mb-3 small">
                      <i className="bi bi-exclamation-triangle me-1"></i>
                      Movie data incomplete
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-3 btn-group">
                    {movie.URL ? (
                      <a 
                        href={movie.URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline-primary btn-sm"
                      >
                            Visit URL
                      </a>
                    ) : (
                      <button className="btn btn-outline-secondary btn-sm" disabled>
                         No URL
                      </button>
                    )}
                    <button className="btn btn-outline-success btn-sm">
                      Details
                    </button>
                         <button className="btn btn-outline-danger btn-sm " onClick={()=>Trash(movie.id)}>
                      Trash
                    </button>
                     <NavLink className="btn btn-outline-warning btn-sm " to={`/UpdateMovie/${movie.id}`}>
                      Update
                    </NavLink>
                    
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                  <small className="text-muted">
                    <i className="bi bi-hash me-1"></i>
                    {movie.id}
                  </small>
                  {movie.rating && (
                    <small className={parseFloat(movie.rating) > 0 ? 'text-warning fw-bold' : 'text-muted'}>
                      <i className="bi bi-star me-1"></i>
                      {parseFloat(movie.rating).toFixed(1)}/10
                    </small>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          /* Empty State */
          <div className="col-12 text-center py-5">
            <div className="alert alert-info w-75 mx-auto">
              <i className="bi bi-film display-4 d-block mb-3 text-primary"></i>
              <h4>No movies found</h4>
              <p className="mb-0">
                {movieList ? 
                  'All movie entries appear to be empty. Please add movie data.' : 
                  'Movies will appear here once loaded from the server.'
                }
              </p>
              <button 
                className="btn btn-primary mt-3"
                onClick={() => dispatch(viewMovie())}
              >
                <i className="bi bi-arrow-clockwise me-1"></i>
                Reload Movies
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      {movieList && movieList.length > 0 && (
        <div className="row mt-5">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body py-3">
                <div className="row text-center">
                  <div className="col-md-3">
                    <h4 className="text-primary">{movieList.length}</h4>
                    <small className="text-muted">Total Movies</small>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-success">
                      {movieList.filter(m => m.title && m.title.trim() !== '').length}
                    </h4>
                    <small className="text-muted">With Titles</small>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-warning">
                      {movieList.filter(m => parseFloat(m.rating) > 0).length}
                    </h4>
                    <small className="text-muted">Rated Movies</small>
                  </div>
                  <div className="col-md-3">
                    <h4 className="text-info">
                      {movieList.filter(m => m.URL && m.URL.trim() !== '').length}
                    </h4>
                    <small className="text-muted">With URLs</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for hover effects */}
      <style>
        {`
          .hover-shadow {
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .hover-shadow:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }
          .object-fit-cover {
            object-fit: cover;
          }
          .card {
            min-height: 500px;
          }
        `}
      </style>
    </div>
  )
}

export default HomeList




