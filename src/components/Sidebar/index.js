import { CgProfile } from "react-icons/cg";
import { AiFillDashboard } from "react-icons/ai";
import { FaUserTie,FaHandHoldingUsd,FaBalanceScale,FaBook,FaFileAlt,FaFileContract,FaUser,FaMoneyBillAlt,FaSignature,FaBriefcase,FaCalendar,FaTools,FaSignOutAlt     } from "react-icons/fa";
import { MdOutlinePayment,MdAttachMoney } from "react-icons/md";




import {Bg,ProfileContainer,UlContainer,IconTextContainer} from "./styledComponents"

const Sidebar=()=>
    <Bg>
        <ProfileContainer>
                <CgProfile style={{fontSize:"20px",marginRight: "5px"}} />
                <h1 style={{fontSize:"15px"}}>Nandu Fab</h1>
        </ProfileContainer>
        <UlContainer>
            <IconTextContainer>
                <AiFillDashboard style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Dashboard</p>
            </IconTextContainer>
             <IconTextContainer>
                <FaUserTie  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Borrower</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaHandHoldingUsd  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Loans</p>
            </IconTextContainer>
            <IconTextContainer>
                <MdOutlinePayment  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Repayments</p>
            </IconTextContainer>
             <IconTextContainer>
                <FaBalanceScale  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Loan Parameters</p>
            </IconTextContainer>
             <IconTextContainer>
                <FaBook  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Accounting</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaFileAlt  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Reports</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaFileContract  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Collateral</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaUser  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Access Configuration</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaMoneyBillAlt  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Savings</p>
            </IconTextContainer>
            <IconTextContainer>
                <MdAttachMoney  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Expenses</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaSignature  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>e-signarure</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaBriefcase  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Investor Accounts</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaCalendar  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Calendar</p>
            </IconTextContainer>
            <IconTextContainer>
                <FaTools  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Settings</p>
            </IconTextContainer>
             <IconTextContainer>
                <FaSignOutAlt  style={{fontSize: "20px",marginRight: "5px"}} />
                <p>Signout</p>
            </IconTextContainer>
        </UlContainer>
     </Bg>

    export default Sidebar