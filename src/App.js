import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home'
import Details from './components/animals/details'

// import Reviews from './components/reviews/reviews'
import Animals from './components/storefront/animals'



import Appointments from './components/pages/appointments/appointments'
import Profile from './components/profile/profile'
import Welcome from './components/pages/welcome'
import About from './components/aboutUs/aboutus'
import Inquiry from './components/cart/inquiry'

import History from './components/history/history'

// import Chat from './components/chat/Chat';
// import Reviews from './components/review/reviews'



function App() {
  return (
    <Router >
      {/* <Chat /> */}
      <Routes>
        <Route exact path='/welcome' element={<Welcome />} />
        <Route path='/' element={<Home />} />
        {/* <Route exact path='/review' element={<Reviews />} /> */}
        <Route exact path='/details' element={<Details />} />
        <Route exact path='/history' element={<History />} />
        <Route exact path='/appointments' element={<Appointments />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/animals' element={<Animals />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/inquiry' element={<Inquiry />} />

      </Routes>
    </Router>
  );
}

export default App;
