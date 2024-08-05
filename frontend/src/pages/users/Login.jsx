import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassowrd]=useState('')
    const[message,setMessage]=useState('')
  return (
    <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
      <h1 className='text-2xl font-semibold pt-5'>Please Login</h1>
      <form className='space-y-5 max-w-sm mx-auto pt-8'>
<input type='text' value={email} className='w-full bg-white  focus:outline-none px-5 py-3'
placeholder='Email'
required/>
<input type='password' value={password} className='w-full bg-white  focus:outline-none px-5 py-3'
placeholder='Password'
required/>
{
    message && <p className='text-red-500'>{message}</p>
}
<button className='w-full mt-5 bg-black hover:bg-indigo-500 text-white font-medium rounded-md'>Login</button>
      </form>
      <p className='my-5 text-center'>Don't have an account? <Link to="/register" className="text-red-700">Register</Link></p>
    </div>
  )
}

export default Login
