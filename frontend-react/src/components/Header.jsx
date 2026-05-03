import React, { useContext, useEffect, useState } from 'react'
import imgLogo from '../assets/image/logo_cyber.png'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'/* stop page reload and link to other page */
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {IsLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged out');
    navigate('/login');
  }
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    //Clean up the interval on component unmount
    return () => clearInterval(intervalid);
  }, []);

  const formattedTime = currentTime.toLocaleDateString();
  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light text-font' to="/">
                <img src={imgLogo} alt="" width={200} height={100} className='bg-info img-fluid me-2' />Stock Prediction Portal
            </Link>

            <div className='d-flex align-items-center gap-1'>
              <span className='text-light fw-bold fs-6 px-1 py-1 bg-success rounded shadow'>{formattedTime}</span>
              {IsLoggedIn ? (
                  <>
                    <Button text='Dashboard' class="btn-outline-info" url="/dashboard" />
                    &nbsp;
                    <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                  </>
               ) : (
                <>
                  <Button text='Login' class="btn-outline-info" url="/login" />
                  &nbsp;
                  <Button text='Register' class="btn-info" url="/register" />{/* class is props name */}
                </>
              )}
              
            </div>
        </nav>
    </>
  )
}

export default Header