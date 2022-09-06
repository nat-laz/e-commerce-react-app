import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export default function Login() {
  const {user} = useContext(AppContext)
  if (user) {
    return <Navigate to="/profile"/>
  }
  return (
    <div><h1>Login</h1></div>
  )
}
