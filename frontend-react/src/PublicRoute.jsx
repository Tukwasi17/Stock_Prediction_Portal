import {useContext} from 'react'
import {AuthContext} from './AuthProvider'
import {Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
    const { IsLoggedIn } = useContext(AuthContext)
  return !IsLoggedIn ? (
    children
  ) : (
    <Navigate to='/dashboard' />
  )
}

export default PublicRoute