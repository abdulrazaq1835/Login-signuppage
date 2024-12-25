import { useState} from "react";

import { Link  } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signupform(){

    const [name , setName] =  useState()
    const [email , setEmail] =  useState()
    const [password , setPassword] =  useState()
     const navigate = useNavigate()

    const  handlesubmit = (e)=>{
         e.preventDefault()
        axios.post('http://localhost:3001/register',{name ,email, password})
        .then(result=>{console.log(result)
             navigate('/login')

        })
        .catch(err=>console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary min-vh-100 min-vw-100">
            <div className="bg-white p-4 rounded-3 shadow" style={{ width: '400px' }}>
                <h2 className="text-left mb-4 text-primary">Register</h2>
                <form onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            name="name"
                            className="form-control"
                            onChange={(e)=>setName(e.target.value)}
                                   />
        
                      
                    </div>

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

                    <div className="mb-4">
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
                        Register
                    </button>
                    </form>

                    <p className="text-center mb-3">Already have an Account?</p>
                    
                    <Link to='/Login' className="btn btn-outline-secondary w-100" >
                        Log In
                    </Link>
               
            </div>
        </div>
    )
}

export default Signupform;