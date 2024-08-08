import React, { useState } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Inputbox from '../components/Inputbox'
import Button from '../components/Button'
import Bottomwarning from '../components/Bottomwarning'
import axios  from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  return (
    <div className='flex bg-slate-200 h-screen justify-center'>
      <div className='flex flex-col w-80 justify-center'>
        <div className="rounded-xl bg-white w-80 text-center p-2 h-max px-4">
          <Heading label ={"Signup"}/>
          <Subheading label ={"Enter your information :)" } />
          <Inputbox onChange={(e)=>{
            setFirstName(e.target.value)
          }} label= {"First Name"} placeholder={"FirstName"}/>
          <Inputbox onChange={(e)=>{
            setLastName(e.target.value)
          }} label= {"Last Name"} placeholder={"lastName"}/>
          <Inputbox onChange={(e)=>{
            setUsername(e.target.value)
          }} label= {"Email"} placeholder={"Email"}/>
          <Inputbox onChange={(e)=>{
            setPassword(e.target.value)
          }} label= {"Password"} placeholder={"Password"}/>
          <Button label={"Sign up"} 
            onClick={async()=>{
              const response = await axios.post('http://localhost:3000/api/v1/user/signup',{
                username,
                firstName,
                lastName,
                password
              })
              localStorage.setItem("token",response.data.token)
              navigate('/dashboard')
            }}
          />
          <Bottomwarning label={"Already have an account ->"} text={"signin"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

export default Signup

