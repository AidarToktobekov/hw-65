import { NavLink, Route, Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Page from './container/Page/Page'
import Admin from './container/Admin/Admin'
import Home from './container/Home/Home'

const App=()=> {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Static Pages</NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/pages/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/pages/contacts'>Contacts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/pages/info'>Info</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/admin'>Admin</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>  

      <div className="container">
        <Routes>
          <Route path="/pages/:id" element={(
            <Page/>
          )}/>
          <Route path="/admin" element={(
            <>
              <Admin></Admin>
            </>
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
    </>
  )
}

export default App
