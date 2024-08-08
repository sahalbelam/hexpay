import { useState , React } from 'react'
import Heading from '../components/Heading'
import Subheading from '../components/Subheading'
import Inputbox from '../components/Inputbox'
import Button from '../components/Button'
import Bottomwarning from '../components/Bottomwarning'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Signin = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  return (
    <div className='flex bg-slate-200 h-screen justify-center'>
      <div className='flex flex-col w-80 justify-center'>
        <div className="rounded-xl bg-white w-80 text-center p-2 h-max px-4">
          <Heading label ={"Signin"}/>
          <Subheading label ={"Enter your information :)"} />
          <Inputbox onChange={(e)=>{
            setUsername(e.target.value)
          }} label= {"Email"} placeholder={"Email"}/>
          <Inputbox onChange={(e)=>{
            setPassword(e.target.value)
          }} label= {"Password"} placeholder={"Password"}/>
          <Button onClick={async()=>{
            const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
              username,
              password
            })
            localStorage.setItem('token',response.data.token)
            navigate('/dashboard')
          }} label={"Sign-in"} />
          <Bottomwarning label={"Don't have an account ->"} text={"signup"} to={"/signup"}/>
        </div>
      </div>
    </div>
  )
}

export default Signin
