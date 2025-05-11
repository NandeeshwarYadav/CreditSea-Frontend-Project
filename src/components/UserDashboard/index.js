import { useNavigate } from "react-router-dom";

import Cookies from "js-cookie"

import {useState,useEffect} from "react"

import { FaFilter    } from "react-icons/fa";

import { MdOutlineSort } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Header from "../Header/index.js"

import { FiSearch } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import Loader from "../Loader"


import {Bg,  UsersCardContainer,HeadingFilterContainer,SortFilterContainer, Heading,  Profile,UserCardName, SortContainer,CardHeadingsContainer,UserCardDate,UserCardHead,UserCardActionBtn,  UserCardAction, LoanIconConatiner,LoanIconConatinerAmount,LoanButton,LoanIconButtonContainer,CashTypesContainer,CashTypes,SearchLoansContainer,SearchIcon,Input,InnerBg} from "./styledComponents"
  
const UserDashboard=()=>{

const navigate = useNavigate();
     const [usersList,setUsersList]=useState()
     const token=Cookies.get("jwt_token")
     console.log(token)
      const id=Cookies.get("id")
     console.log(id)

     useEffect( ()=>{
        getData()
     } ,[])

     const getData=async ()=>{
        const url=`https://creditsea-backend-project.onrender.com/user/loan-overview/${id}`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
      //  console.log(response)
        const data=await response.json()
        if (response.ok){
              console.log(data)
          const fetchedData = {
        userId: data.user_id,
        totalLoan: data.total_loan,
        totalRepaid: data.total_repaid,
        totalPending: data.total_pending,
        loans: data.loans.map(loan => ({
      amount: loan.amount,
      loanId: loan.loan_id,
      createdAt: loan.created_at,
      pendingAmount: loan.pending_amount,
      reason: loan.reason,
      repaidAmount: loan.repaid_amount,
      status: loan.status,
      name: loan.name,
      pendingOfficerName:loan.pendingOfficerName
    }))
          }
       //   console.log(fetchedData)
          setUsersList(fetchedData)
        }
    }


const onClickApplyLoan=()=>{
     navigate("/apply-loan");
}


    const displayUsers=()=>{
    const userApplications = usersList?.loans || [];
 //  console.log(userApplications)
   
    return <UsersCardContainer>
        <HeadingFilterContainer>
            <Heading>Applied Loans</Heading>
            <SortFilterContainer>
            <SortContainer>
                <MdOutlineSort style={{marginRight:"5px"}}/>
                <p>Sort</p>
            </SortContainer>
             <SortContainer>
                <FaFilter style={{marginRight:"5px"}}/>
                <p>Filter</p>
            </SortContainer>
            </SortFilterContainer>
        </HeadingFilterContainer>
    <CardHeadingsContainer>
        <UserCardHead>User Profile</UserCardHead>
        <UserCardName>Customer Name</UserCardName>
        <UserCardDate>Date</UserCardDate>
        <UserCardAction>Action</UserCardAction>
    </CardHeadingsContainer>
{! usersList? <Loader/>   :  
    userApplications.map(each=>(<div key={each.loanId}>
        <CardHeadingsContainer>
            <Profile>
            <CgProfile   style={{fontSize:"30px"}} />
        </Profile>
        <p>{each.pendingOfficerName}</p>
                <UserCardName>{each.name}</UserCardName>
                <UserCardDate style={{width:"70px"}}   >{each.createdAt}</UserCardDate>
                <UserCardActionBtn type="button"  status={each.status} >{each.status}</UserCardActionBtn>
        </CardHeadingsContainer>

    </div>))
  }
    
    </UsersCardContainer>}


return <Bg>

<Header/>
<InnerBg>
    <LoanIconButtonContainer>
    <LoanIconConatinerAmount>
    <LoanIconConatiner> <FaMoneyBillWave  style={{color:"white",fontSize:"40px"}} /></LoanIconConatiner>
    <h1>0.0</h1>
</LoanIconConatinerAmount>
<LoanButton onClick={onClickApplyLoan}>Get a Loan</LoanButton>
</LoanIconButtonContainer>

<CashTypesContainer>
    <CashTypes>Borrow Cash</CashTypes>
    <CashTypes>Transact</CashTypes>
    <CashTypes>Deposit Cash</CashTypes>
</CashTypesContainer>

<SearchLoansContainer>
    <SearchIcon>
        <FiSearch style={{fontSize:"20px"}}   />
    </SearchIcon>
    <Input  type="search"  placeholder="Search for Loans" />
</SearchLoansContainer>
{displayUsers()}
</InnerBg>
</Bg>}

export default UserDashboard