
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

import {Bg,InnerBg ,Card,Heading,Form,FormSub,LabelInputContainer,TextInput,Label,FlexContainer,PolicyTermsContainer,PolicyTerms,Checkbox,SubmitButton} from "./styledComponents.js"

import Header from "../Header/index.js"

const LoanForm= ()=>   {

const [username,setUsername]=useState("")
const [tenure,setTenure]=useState("")
const [reason,setReason]=useState("")
const [amountNeed,setAmountNeed]=useState("")
const [employmentStatus,setEmploymentStatus]=useState("")
const [employmentAddress,setEmploymentAddress]=useState("")
const [firstPolicy,setFirstPolicy]=useState(false)
const [secondPolicy,setSecondPolicy]=useState(false)



const navigate = useNavigate();

const OnChangeUsername=(event)=>{
setUsername(event.target.value)
}


const OnChangeTenure=(event)=>{
setTenure(event.target.value)
}

const OnChangeReason=(event)=>{
setReason(event.target.value)
}

const OnChangeAmountNeeded=(event)=>{
setAmountNeed(event.target.value)
}

const OnChangeEmploymentStatus=(event)=>{
setEmploymentStatus(event.target.value)
}

const OnChangeEmploymentAddress=(event)=>{
setEmploymentAddress(event.target.value)
}

const onChangeFirstPolicy=(event)=>{
    setFirstPolicy(event.target.checked)
}

const onChangeSecondPolicy=(event)=>{
    setSecondPolicy(event.target.checked)
    
}


    const OnSubmitForm=async (event)=>{
        event.preventDefault()
        
 if (!firstPolicy && !secondPolicy){
    alert("Please accept the both policies before submitting the form!")
}
else if (!username || !tenure || !amountNeed || !reason || !employmentAddress || !employmentStatus || !employmentAddress){
    alert("Please fill all the blanks before submitting the form!")
}
 
 else{
    const token=Cookies.get("jwt_token")

     const url=`https://creditsea-backend-project.onrender.com/apply-loan`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: username,
                loanTenure: tenure,
                reason: reason,
                amount: amountNeed,
                employmentStatus: employmentStatus,
                employmentAddress: employmentAddress
            })
        }
       setUsername("");
        setTenure("");
        setAmountNeed("")
        setReason("")
        setEmploymentStatus("")
        setEmploymentAddress("")
        setFirstPolicy(false)
        setSecondPolicy(false)
        const response=await  fetch (url,options)
       if (response.ok){
            navigate("/user")
       }
       
 }
    
    }



    return <Bg>
           <Header/>
       <InnerBg>   
     
                <Card>
                    <Heading>Apply For A Loan</Heading>
                    <Form onSubmit={OnSubmitForm}  > 
                        <FormSub>
                            <FlexContainer>  
                                <LabelInputContainer>
                                    <Label htmlFor="input-1"  >Full name as it appears on bank account</Label>
                                    <TextInput type="text" id="input-1" placeholder="Full name as it appears on bank account" onChange={OnChangeUsername} value={username}  />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="input-2"  >Loan tenure in (months)</Label>
                                    <TextInput type="text" id="input-2" placeholder="Loan tenure in (months)"  onChange={OnChangeTenure} value={tenure}  />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="input-3"  >Reason for Loan</Label>
                                    <TextInput type="text" id="input-3" placeholder="Reason for Loan" style={{ height: "100px" }}  onChange={OnChangeReason} value={reason}/>
                                </LabelInputContainer>
                            </FlexContainer>
                            <FlexContainer>  
                                <LabelInputContainer>
                                    <Label htmlFor="input-4"  >How much do you need?</Label>
                                    <TextInput type="text" id="input-4" placeholder="How much do you need?" onChange={OnChangeAmountNeeded} value={amountNeed}  />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="input-5"  >Employment status</Label>
                                    <TextInput type="text" id="input-5" placeholder="Employment status"  onChange={OnChangeEmploymentStatus} value={employmentStatus} />
                                </LabelInputContainer>
                                <LabelInputContainer>
                                    <Label htmlFor="input-6"  >Employment address</Label>
                                    <TextInput type="text" id="input-6" placeholder="Employment address" onChange={OnChangeEmploymentAddress} value={employmentAddress}   />
                                </LabelInputContainer>
                            </FlexContainer>
                        
                        </FormSub>
                    <PolicyTermsContainer>
                        <PolicyTerms>
                        <Checkbox type="checkbox" id="checkbox-1" onChange={onChangeFirstPolicy} checked={firstPolicy} />
                        <Label htmlFor="checkbox-1">I have read the important information and accept that by completing the application, I will be bound by the terms.</Label>
                        </PolicyTerms>
                        <PolicyTerms>
                        <Checkbox type="checkbox" id="checkbox-2" onChange={onChangeSecondPolicy} checked={secondPolicy} />
                        <Label htmlFor="checkbox-2">Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.</Label>
                        </PolicyTerms>
                    </PolicyTermsContainer>
                    <SubmitButton type="submit">Submit</SubmitButton>
                    </Form>
                </Card>
            </InnerBg>
    </Bg>
     
    
}
           



    


export default LoanForm


