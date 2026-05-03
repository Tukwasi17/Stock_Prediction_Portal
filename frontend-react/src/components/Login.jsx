{/*import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {IsLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userData = {username, password}
    console.log('userData==>', userData);

    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      /* console.log(response.data); */
      /* store in the local storage */
      /*localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      console.log('login successfully'); 
      setIsLoggedIn(true)
      navigate('/dashboard')
    }catch(error){
      console.error('Invalid Credentials');
      setError('Invalid Credentials')
    }finally{
      setLoading(false)
    }
  }
  
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>Login </h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '100%' }} /> {/* onChange to be able to write */}
              {/*</div>
              
              <div className='mb-3'>
                <input type="password" className='form-control' placeholder='Set password' value={password} onChange={(e) => setPassword(e.target.value)} style={{ backgroundColor: '#fff', color: '#000', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '100%' }} />
              </div>
              
              {error && <div className='text-danger'>{error}</div>}
              
              {/* conditional rending */}
              /*{loading ? (
                <button type='submit' className='btn btn-info d-block mx-auto big' disabled><FontAwesomeIcon icon={faSpinner} spin /> Logging in....</button>
              ) : (
                <button type='submit' className='btn btn-info d-block mx-auto big'>Login</button>
              )}
              
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login */




import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const { setIsLoggedIn } = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault();

    // ✅ 1. Prevent empty login
    if (!username || !password) {
      setError('All fields are required')
      return
    }

    setLoading(true);

    const userData = { username, password }

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/v1/token/',
        userData
      )

      // ✅ Store tokens
      localStorage.setItem('accessToken', response.data.access)
      localStorage.setItem('refreshToken', response.data.refresh)

      setIsLoggedIn(true)
      navigate('/dashboard')

    } catch (error) {
      // ✅ 2. Better error handling
      console.error(error.response?.data)
      setError('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>Login</h3>

            <form onSubmit={handleLogin}>
              
              {/* Username */}
              <div className='mb-3'>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Enter Username'
                  value={username}
                  
                  // ✅ 3. Clear error while typing
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError('')
                  }}

                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    width: '100%'
                  }}
                />
              </div>

              {/* Password */}
              <div className='mb-3'>
                <input
                  type="password"
                  className='form-control'
                  placeholder='Enter password'
                  value={password}

                  // ✅ 3. Clear error while typing
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}

                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                    width: '100%'
                  }}
                />
              </div>

              {/* Error Message */}
              {error && <div className='text-danger'>{error}</div>}

              {/* Button */}
              {loading ? (
                <button
                  type='submit'
                  className='btn btn-info d-block mx-auto big'
                  disabled
                >
                  <FontAwesomeIcon icon={faSpinner} spin /> Logging in...
                </button>
              ) : (
                <button
                  type='submit'
                  className='btn btn-info d-block mx-auto big'
                >
                  Login
                </button>
              )}
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Login

