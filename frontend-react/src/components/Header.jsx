import React from 'react'
import imgLogo from '../assets/image/logo_cyber.png'
import Button from './Button'
import { Link } from 'react-router-dom'/* stop page reload and link to other page */

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light text-font' to="/">
                <img src={imgLogo} alt="" width={200} height={100} className='bg-info img-fluid me-2' />Stock Prediction Portal
            </Link>

            <div>
              <Button text='Login' class="btn-outline-info" url="/Login" />
              &nbsp;
              <Button text='Register' class="btn-info" url="/Register" />{/* class is props name */}
            </div>
        </nav>
    </>
  )
}

export default Header