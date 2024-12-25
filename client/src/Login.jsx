import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Login(){
        
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email,password})
    .then(result=>{
        console.log(result)
        if(result.data.status === "success")
            navigate('/home')
        else
            alert('Login failed. Please check your credentials.')
    })
    .catch(err=>{
        console.error('Login error:', err)
        alert('An error occurred during login. Please try again.')
    })
  }
    
    return(<>
   <div className="d-flex justify-content-center align-items-center bg-secondary min-vh-100 min-vw-100">
   <div className="bg-white p-4 rounded-3 shadow" style={{ width: '400px' }}>
    <h2>LogIn</h2>
    <form onSubmit={handleSubmit}>
       <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>



                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            name="password"
                            className="form-control"
                            onChange={(e)=>setPassword(e.target.value)}
                        />


                    </div>
                

                    
                    <button type="submit" className="btn btn-primary w-100 mb-3">
                        Login
                    </button>
                    </form>
                    
                    <p className="text-center mb-0">Don't have an Account?</p>
                    
                    <Link to="/register" className="btn btn-light border w-100 mt-2 text-decoration-none">
                        Signup
                    </Link>
                   
                    </div>
                    </div>
                    
                    
                   

                    
                    
                    <Link to='/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none" >
                        Signup
                    </Link>
                    

    </>)
    
}

export default Login
