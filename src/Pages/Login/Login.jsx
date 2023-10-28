import React from 'react'
import LoginForm from '../../Components/Form/LoginForm'

function Login({handleLogin}) {
  return (
    <>
    <LoginForm handleLogin={handleLogin}/>
    </>
  )
}

export default Login