import {useState} from "react"
import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie"

import {Bg,Heading,Card,Form,LabelInputContainer,Label,Input,LoginButton,ErrMsg} from "./styledComponents.js"


const Login=()=>
        { 

            const navigate = useNavigate();
            const [username,setUsername]=useState("")
            const [password,setPassword]=useState("")
            const[errMsg,setErrMsg]=useState("")

            const onChangeUsername=(event)=>{
                setUsername(event.target.value)
            }
        // console.log(username)

            const onChangePassword=(event)=>{
                setPassword(event.target.value)
            }


const onSubmitSuccess=(jwtToken,id,role)=>{
    Cookies.set("jwt_token",jwtToken,{expires:30})
     Cookies.set("id",id,{expires:30})
     Cookies.set("role",role,{expires:30})
    setErrMsg("")
    const token=Cookies.get("jwt_token")
     const pay=Cookies.get("id")
    // console.log(pay)
    const currentRole=Cookies.get("role")
      navigate(`/${role}`);

}

const onClickSignup=()=>{
    navigate("/signup")
}


const onSubmitFailure=(errMsg)=>{
    setErrMsg(errMsg) 
}
           const onSubmitForm=async (event)=>{
                event.preventDefault()

                if (!username || !password){
                    alert("Enter all the details before login")
                }
                else{
                    const url=`https://creditsea-backend-project.onrender.com/api/user/login`
                     const options={
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username,
                    password
                })
            }
            const response=await fetch(url,options)
            const data=await response.json()
            console.log(data)
             
            if (response.ok){
               onSubmitSuccess(data.jwtToken,data.id,data.role)
            }

            else{
                onSubmitFailure(data.error)
            //    console.log(data.error)
            }
                }
            }



        return<Bg>
        <Card><Heading>
             ENTER LOGIN DETAILS
            </Heading>
            <Form onSubmit={onSubmitForm}>
            <LabelInputContainer>
                <Label htmlFor="input-1"  >USERNAME</Label>
                <Input type="text" id="input-1" placeholder="Enter username" value={username} onChange={onChangeUsername} />
            </LabelInputContainer>
             <LabelInputContainer>
                <Label htmlFor="input-2"  >PASSWORD</Label>
                <Input type="password" id="input-2" placeholder="Enter password" value={password} onChange={onChangePassword} />
            </LabelInputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {errMsg&& <ErrMsg>*{errMsg}*</ErrMsg> }
            </Form>
                 <LoginButton type="button" onClick={onClickSignup}>Signup</LoginButton>
            </Card>
        </Bg>
}
export default Login