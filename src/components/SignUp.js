import React, { useState } from 'react'
import { url } from '../App'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

function SignUp() {
    let[firstName,setfirstName]=useState("")
    let[lastName,setlastName]=useState("")
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    
    let handleSignup=async()=>{
      try {
       let res=await axios.post(`${url}/signup`,{firstName,lastName,email,password})
        if(res.status===201)
       {
        toast.success(res.data.message)
        }else{
            toast.error(res.data.error)
         }
       } catch (error) {
        toast.error(error.response.data.message)
      }
    }
  return <>
  <div>
  <Card className='shadow col-lg-6 mx-auto mt-3'>
      <div className='text-center mt-3'>
    <h3>Sign Up</h3>
    </div>
    <Form className='p-3'>
    <Form.Group className="mb-3" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name"  onChange={(e)=>setfirstName(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Last Name"onChange={(e)=>setlastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email"onChange={(e)=>setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Email"onChange={(e)=>setPassword(e.target.value)} />
        </Form.Group>
        
        <Button className="col-lg-12" variant="primary"onClick={()=>handleSignup()}>
        SignUp
      </Button>
    </Form>
    <h5 style={{textAlign:"center"}}><NavLink to='/login'><b>Login</b></NavLink></h5>
    </Card>
  </div>
  </>
}

export default SignUp