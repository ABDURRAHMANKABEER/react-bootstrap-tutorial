import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home'
import UsersList from './users list'
import Mynavbar from './navbar'
import UserDetails from './userdatails'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewUser from './newUser'
import ContactMe from './ContactMe'
import WeatherApp from './weatherApp'
import PracticeRedux from '../reducer practice'

function App() {

  return (
    <>
      <Router>
      <div className='container-fluid mt-5 pt-3'>
        <Mynavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/weatherApp' element={<WeatherApp />} />
          <Route path='/contactMe' element={<ContactMe />} />
          <Route path='/usersList' element={<UsersList />} />
          <Route path='/user/:id' element={<UserDetails />}/>
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/reduxPractice' element={<PracticeRedux />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App
