import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header className="container bg-secondary">
      <div className="row d-flex justify-content-around">
        <img className="logo mt-3 mb-2"  src="https://icons-for-free.com/iconfiles/png/512/store+app+store+logo+apple+apple+app+store+apps+appstore+icon-1320196077710528418.png" alt='logo'/>
        <nav>
          <ul className="mt-3">
            <li className="link">
              <Link to='/' className="link"><button type="button" className="btn btn-primary btn-lg">Home</button></Link>
            </li>
            <li className="link">
              <Link to='/apps' className="link"><button type="button" className="btn btn-primary mt-1 btn-lg ">Apps List</button></Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default NavBar
