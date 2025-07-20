import React from 'react'
import imgLogo from '../assets/image/logo_cyber.png'
import Button from './Button'

const header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <a className='navbar-brand text-light text-font' href="">
                <img src={imgLogo} alt="" width={200} height={100} className='bg-info img-fluid me-2' />Stock Prediction Portal
            </a>

            <div>
                <Button text='Login' class="btn-outline-info" />
                &nbsp;
                <Button text='Register' class="btn-info" />
            </div>
        </nav>
    </>
  )
}

export default header