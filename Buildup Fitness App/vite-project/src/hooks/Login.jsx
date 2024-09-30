import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import api from '../service/ApiService'
import { Link, useNavigate } from 'react-router-dom';
import ApiRoutes from '../utils/ApiRoutes';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function Login() {

  const navigate = useNavigate()

  const handleLogin = async(e)=>{
    e.preventDefault()
   try {
      const formData = new FormData(e.currentTarget)
      const data = {}
      for (let [key, value] of formData.entries())
        data[key] = value

      let response = await api.post(ApiRoutes.LOGIN.path,data,{
        authenticate:ApiRoutes.LOGIN.authenticate
      })

      toast.success(response.message)

      sessionStorage.setItem("token",response.token)
      sessionStorage.setItem("role",response.role)

      navigate('/userProfile')

   } catch (error) {
      toast.error(error.response.data.message || "Error Occured! Please try again!")
   } 
  }

  useEffect(()=>{
    sessionStorage.clear()
  },[])

  return (
    <div className='login-wrapper'>
      <h3 className='text-align-center'>Login to Change your Lifestyle</h3>
      <p className='text-align-center'>New User <Link to='/signup'>Register Now</Link></p>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>

        <div className='text-align-center'><Button variant="primary" type="submit">
          Submit
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default Login