
import styled from "styled-components"

export const Bg=styled.div`
  background-color: #fdf8f4;
  height: 100vh;
  background-size: cover;
  font-family: 'Roboto';
`

export const InnerBg=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


export const Card=styled.div`
    padding: 20px;
    background-color: #ffffff;
    border: 5px white;
    border-radius: 5px;
    width: 80%;
`


export const Heading=styled.h1`
    @media(min-width:768px){
      margin-left: 200px;
    }
`
export const Form=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FlexContainer=styled.div`
    margin-right: 20px;
`


export const FormSub=styled.div`
    @media (min-width:768px){
      display: flex;
      justify-content: space-evenly;
    }
    
`

export const LabelInputContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Label=styled.label`
    margin-bottom: 10px;
`


export const TextInput=styled.input`
    width: 250px;
    height: 30px;
    border: 2px solid #dcdcdc;
    border-radius: 5px;
    padding-left: 20px;
`
export const PolicyTermsContainer=styled.div`
    @media(min-width:768px){
      display: flex;
      justify-content: space-evenly;
    }
`
export const PolicyTerms=styled.div`
    width: 250px;
    margin-right: 20px;
    margin-bottom: 20PX;
`
export const Checkbox=styled.input`

`

export const SubmitButton=styled.button`
    width: 100px;
    background-color: #0066ff;
    height: 30px;
    border: 0px;
    color: #ffffff;
    border-radius: 5px;
`