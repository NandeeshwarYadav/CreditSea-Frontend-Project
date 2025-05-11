
import styled from "styled-components"

export const Bg=styled.div`
  background-color: #ffffff;
  padding: 20px;
  font-family: 'Roboto';
`
export const Heading=styled.h1`
  font-size: 15px;
  margin-right: 10px;
  @media(min-width:768px){
    font-size:30px;
  }
`
export const HeadingListContainer=styled.div`
  display: flex;
  align-items: center;
`

export const Navbar=styled.nav`
  display: flex;
  justify-content: space-between;
    @media(min-width:768px){
      justify-content: space-around;
  }
`

export const Icons=styled.div`
  font-size: 25px;
  color: #4B5563;
  margin-right: 5px;
  
`