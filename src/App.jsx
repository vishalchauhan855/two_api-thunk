import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Routing } from './Routing/Routing'
import Navbar from './Component/Navbar';
function App() {
  return (
  <Router>
    <Navbar/>
    <Routes>
      {
        Routing.map((ele)=>(
          <Route path={ele.path} element={<ele.element/>}/>
        ))
      }
    </Routes>
  </Router>
  )
}

export default App
