import React from 'react'
import {
  BrowserRouter as Router,
  Routes,Route,Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/dashboard' element={<Home/>}/>
          <Route path='/income' element={<Income/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
