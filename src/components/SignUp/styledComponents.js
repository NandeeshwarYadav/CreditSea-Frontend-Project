
import styled from "styled-components"

export const Bg=styled.div`
  background-color: #fdf8f4;
  height: 100vh;
  background-size: cover;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `
  export const Card=styled.div`
    background: linear-gradient(135deg, #ffe3e3 0%, #f6c9ff 50%, #cce7ff 100%);
    border: 2px white;
    border-radius: 5px;
    padding: 20px;
    width: 80%;
    @media (min-width:768px){
      width: 400px;
    }
  `

  export const Form=styled.form`
    padding: 20px;
  `

  export const LabelInputContainer=styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  `

  export const Label=styled.label`
    margin-bottom: 10px;
  `

  export const Input=styled.input`
    width:90%;
    height: 30px;
    border: 2px solid #dcdcdc;
    border-radius: 5px;
    padding-left: 20px;
    @media (min-width:768px){
      width: 300px;
    }
  `
  export const CustomSelect=styled.select`
     width:100%;
       @media (min-width:768px){
      width: 320px;
    }
  `

  export const SubmitButton=styled.button`
    width: 100px;
    background-color: #0066ff;
    height: 30px;
    border: 0px;
    color: #ffffff;
    border-radius: 5px;
`

export const ErrMsg=styled.p`
    color: red;
`