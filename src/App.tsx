import { NavLink, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Page from './container/Page/Page'
import Admin from './container/Admin/Admin'
import Home from './container/Home/Home'

const App=()=> {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <NavLink className="navbar-brand text-light" to="/">Static Pages</NavLink>
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav gap-4">
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to='/pages/admin'>Admin</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container d-flex mt-3 ">
          <div className="bg-dark px-4 rounded-4" style={{height: 'fit-content'}}>
            <div className="my-4">
              <ul className="navbar-nav flex-column justify-content-center" style={{width: '65%'}}>
                <li className="nav-item">
                  <NavLink className="nav-link text-light active" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to='/pages/about'>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to='/pages/contacts'>Contacts</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-light" to='/pages/info'>Info</NavLink>
                </li>
                
              </ul>
            </div>
          </div>

          <div className="bg-dark text-light p-5 rounded-4 ms-5 w-100">
            <Routes>
              <Route path="/pages/admin" element={(
                <>
                  <Admin></Admin>
                  </>
              )}/>
              <Route path="/pages/:id" element={(
                <Page/>
              )}/>
              <Route path="/" element={(
                <>
                  <Home></Home>  
                </>
              )}/>
              <Route path="*" element={(
                <h3 className='text-center'>Not Found!</h3>
              )}/>
            </Routes>
          </div>
        </div>
    </>
  )
}

export default App
