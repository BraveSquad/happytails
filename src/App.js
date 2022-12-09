import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home'
import Details from './components/animals/details'
import Reviews from './components/reviews/reviews'
// import Schedule from './components/scheduling/getNextFiveDays'
import Profile from './components/profile/profile'
import Welcome from './components/pages/welcome'
import About from './components/aboutUs/aboutus'
import Inquiry from './components/cart/inquiry'

function App() {
  return (
    <Router >
      <Routes>
        <Route exact path='/welcome' element={<Welcome />} />
        <Route path='/' element={<Home />} />
        <Route exact path='/reviews' element={<Reviews />} />
        <Route exact path='/details' element={<Details />} />
        {/* <Route exact path='/schedule' element={<Schedule />} /> */}
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/inquiry' element={<Inquiry />} />


      </Routes>
    </Router>
  );
}

export default App;
