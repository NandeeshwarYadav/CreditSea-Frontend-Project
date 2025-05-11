import {useState,useEffect} from "react"

import { FaGreaterThan,FaMoneyBillWave,FaUserTie,FaHandHoldingUsd,FaPiggyBank,FaUserCheck,FaFilter    } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineSort } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
// import { SlOptionsVertical } from "react-icons/sl";

//  <Profile><SlOptionsVertical/></Profile>

import Header from "../Header/index.js"
import Sidebar from "../Sidebar/index.js"
 import Loader from "../Loader/index.js"


import {Bg,InnerBg,DashboardPara,LoansHeading,SidebarContainer,LoanTitleContainer,CardContainer,CardLeft,MainContentContainer,UserCardActionBtn,Card,CardTitle,CardRight,UsersCardContainer,HeadingFilterContainer,SortContainer,SortFilterContainer,CardHeadingsContainer,UserCardHead,UserCardName,UserCardDate,UserCardAction,Profile} from "./styledComponents.js"
  
const VerifierDashboard= ()=>{
    const [usersList,setUsersList]=useState()
   // const [actionStatus,setActionStatus]=useState(false)


    const getData=async ()=>{
        const url=`https://creditsea-backend-project.onrender.com/verifier/dashboard`
        const options={
            method:"GET"
        }
        const response=await fetch(url,options)
      //  console.log(response)
        const data=await response.json()
        if (response.ok){
             console.log(data)
            setUsersList(data)

        }
    }


    const onClickActionBtn =async (id) => {
  
  const url = `https://creditsea-backend-project.onrender.com/verifier/verify-loan/${id}`
    const options = {
      method: 'PUT',
      body: JSON.stringify({id}),
    }
    const response = await fetch(url, options)
   // const data = await response.json()
    if (response.ok) {
     getData()
    } 
};
console.log(usersList)

    useEffect( ()=>{
            getData()
    },[])
  //  console.log(usersList)

    const TopHeadings=()=>  <LoanTitleContainer>
        <DashboardPara>Dashboard </DashboardPara>
        <FaGreaterThan style={{fontSize:"12px"}} />
        <LoansHeading>Loans</LoansHeading>
    </LoanTitleContainer>

    const CardDisplay=()=> {
        const approvedLoanCount = usersList?.approvedLoanCount 
        const fullyRepaidLoanCount = usersList?.fullyRepaidLoanCount
        const borrowersWithPendingLoans = usersList?.borrowersWithPendingLoans
        const totalAmountReceived = usersList?.totalAmountReceived
        const totalAmountDisbursed = usersList?.totalAmountDisbursed
         const totalSavings = usersList?.totalSavings
      // console.log(totalSavings)
    return <CardContainer>
       <Card>
        <CardLeft>
        <FaMoneyBillWave  style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{approvedLoanCount} <br/> Loans</CardTitle>
       </CardRight>
       </Card>
       <Card>
        <CardLeft>
        <FaUserTie  style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{borrowersWithPendingLoans} <br/> Borrowers</CardTitle>
       </CardRight>
       </Card>
        <Card>
        <CardLeft>
        <FaHandHoldingUsd  style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{totalAmountDisbursed} <br/> Cash Disbursed</CardTitle>
       </CardRight>
       </Card>
       <Card>
        <CardLeft>
        <FaPiggyBank    style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{totalSavings} <br/> Savings</CardTitle>
       </CardRight>
       </Card>
        <Card>
        <CardLeft>
        <FaUserCheck   style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{fullyRepaidLoanCount} <br/> Repaid Loans</CardTitle>
       </CardRight>
       </Card>
       <Card>
        <CardLeft>
        <GiReceiveMoney  style={{color:"white",fontSize:"40px"}}   />
       </CardLeft>
       <CardRight>
        <CardTitle>{totalAmountReceived} <br/> Cash Received</CardTitle>
       </CardRight>
       </Card>
    </CardContainer>}

const displayUsers=()=>{
    const recentApplications = usersList?.recentApplications || [];
  //  console.log(recentApplications)
   
    return <UsersCardContainer>
        <HeadingFilterContainer>
            <h1>Applied Loans</h1>
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
    recentApplications.map(each=>(<div key={each.id}>
        <CardHeadingsContainer>
            <Profile>
            <CgProfile   style={{fontSize:"30px"}} />
        </Profile>
                <UserCardName>{each.name}</UserCardName>
                <UserCardDate style={{width:"70px"}}   >{each.created_at}</UserCardDate>
                <UserCardActionBtn type="button"  onClick={()=>onClickActionBtn(each.id)}  status={each.status}  >{each.status}</UserCardActionBtn>
        </CardHeadingsContainer>

    </div>))
  }
    
    </UsersCardContainer>}

return  <Bg>
    <Header/>
    <InnerBg>
    <SidebarContainer>
        <Sidebar/>
    </SidebarContainer>
    <MainContentContainer>
      {TopHeadings()}
      {CardDisplay()}
      {displayUsers()}
   
    </MainContentContainer>
        
    </InnerBg>
    

</Bg>
}
export default VerifierDashboard