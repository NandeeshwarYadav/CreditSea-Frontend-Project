
import styled from "styled-components"

export const Bg=styled.div`
  background-color: #F5F5F5;
  background-size: cover;
  font-family: 'Roboto';
`
export const InnerBg=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`
export const LoanIconConatiner=styled.div`
    background-color: green;
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    @media(max-width:767px){
      width: 60px;
  }
`

export const LoanIconConatinerAmount=styled.div`
    display: flex;
`

export const LoanButton=styled.div`
    background-color: grey;
    width: 100px;
    height: 40px;
    border: 0 none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;
`
export  const LoanIconButtonContainer=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    @media(max-width:768px){
      width: 80%;
      padding: 5px;
  }
`
export const CashTypesContainer=styled.div`
    display: flex;
    margin-top: 40px;
     @media(max-width:768px){
       width: 80%;
    }
`
export const CashTypes=styled.div`
    background-color: #ffffff;
    height: 25px;
    padding; 5px;
    width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    @media(max-width:768px){
      font-size: 10px;
  }
`

export const SearchLoansContainer=styled.div`
    background-color: #ffffff;
    width: 400px;
    height: 20px;
    display :flex;
    padding: 10px;
    border-radius: 5px;
    margin-top: 40px;
    @media(max-width:768px){
      width: 80%;
  }
`

export const SearchIcon=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

export const Input=styled.input`
    width: 100%;
    border: 0 none;
    background-color: transparent;
    height: 80%;
    outline: none;
    padding-left: 20px;
`

export const UsersCardContainer=styled.div`
    background-color: #ffffff;
    padding: 10px;
    margin-top: 40px;
    border-radius: 10px;
`
export const HeadingFilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
`

export const SortFilterContainer=styled.div`
    display: flex;
`

export const SortContainer=styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`
export const CardHeadingsContainer=styled.div`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #e0e0e0;
`
export const UserCardHead=styled.p`
    font-size: 15px;
    width: 150px;
`
export const UserCardName=styled.p`
    font-size: 15px;
    width: 150px;
    @media(max-width:768px){
      width: 80px;
      font-size: 15px;
      margin-left: 10px;
    }
`
export const UserCardDate=styled.p`
    font-size: 15px;
    width: 150px;
    text-align: center;
     @media(max-width:768px){
      width: 80px;
      font-size: 15px;
    }
`
export const UserCardAction=styled.p`
    font-size: 15px;
    width: 150px;
     @media(max-width:768px){
      width: 80px;
      font-size: 15px;
    }
`
export const UserCardActionBtn=styled.button`
    font-size: 15px;
    width: 100px;
    height: 30px;
    border: 0 none;
    border-radius: 5px;
    margin-top: 20px;
    color: #ffffff;
    background-color: ${({ status }) =>
      status === "Approved" ? "green" :
      status === "Rejected" ? "red" :
      status === "Pending" ? "orange" :
        "yellow"};
     @media(max-width:768px){
      width: 80px;
      font-size: 15px;
    }
`

export const Profile=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading=styled.h1`
    font-size: 25px;
    @media(max-width:768px){
      font-size: 15px;
    }
`