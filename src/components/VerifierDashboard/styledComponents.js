

import styled from "styled-components"

export const Bg=styled.div`
  background-color: #F5F5F5;
  background-size: cover;
`
export const InnerBg=styled.div`
    @media (min-width:767px){
        display: flex;
    }
`

export const LoanTitleContainer=styled.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
`


export const DashboardPara=styled.p`
    color: #006400;
    font-weight: 500;
`

export const LoansHeading=styled.h1`
    color: #006400;
    font-weight: 500;
`
export const CardContainer=styled.ul`
    padding-left: 5px;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`

export const Card=styled.li`
    background-color: #ffffff;
    width: 220px;
    display: flex;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 20px; 
    @media(max-width:768px){
      width: 160px;
      margin-right: 20px;
    }
    @media (min-width:768px) and (max-width:1024px) {
      width: 250px;
    }
      @media (min-width:1024px) and (max-width:1439px) {
      width: 280px;
    }
    @media(min-width:1440px) {
      width: 320px;
    }
`

export const CardLeft=styled.div`
    background-color: #006400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 100%;
`

export const CardRight=styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const MainContentContainer=styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`

export const CardTitle=styled.h1`
    margin-left: 10px;
    font-size: 25px;
    @media(max-width:768px){
      font-size: 20px;
    }
`
export const SidebarContainer=styled.div`
    @media(max-width:767px){
      display: none;
    }
`

export const UsersCardContainer=styled.div`
    background-color: #ffffff;
    padding: 10px;
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
        "orange"};
     @media(max-width:768px){
      width: 80px;
      font-size: 15px;
    }
`
export const NameDateAction=styled.div`
    display: flex;
    gap: 40px;
    margin-right: 100px;
`
export const Profile=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`